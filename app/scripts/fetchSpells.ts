import { SpellAction } from "@/app/lib/models/Action";
import {ApiSpellShape, RollSet, EffectRoll, DieFormat, DamageType} from "@/app/types";
import {writeFile} from "node:fs/promises";

// D&D 5e API base URL
const DND_API_BASE = "https://www.dnd5eapi.co/api/2014";

/**
 * Fetches a spell by index from the D&D 5e API
 */
export async function fetchSpell(spellIndex: string): Promise<ApiSpellShape> {
    const response = await fetch(`${DND_API_BASE}/spells/${spellIndex}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch spell ${spellIndex}: ${response.statusText}`);
    }
    return response.json();
}

/**
 * Fetches multiple spells by their indices
 */
export async function fetchSpells(spellIndices: string[]): Promise<ApiSpellShape[]> {
    const promises = spellIndices.map(index => fetchSpell(index));
    return Promise.all(promises);
}

/**
 * Fetches all spells from the D&D 5e API
 */
export async function fetchAllSpells(): Promise<ApiSpellShape[]> {
    // First get the list of all spells
    const listResponse = await fetch(`${DND_API_BASE}/spells`);
    if (!listResponse.ok) {
        throw new Error(`Failed to fetch spell list: ${listResponse.statusText}`);
    }

    const spellList = await listResponse.json();
    const spellIndices = spellList.results.map((spell: {index: string}) => spell.index);

    return fetchSpells(spellIndices);
}

/**
 * Fetches spells for a specific class
 */
export async function fetchSpellsForClass(className: string): Promise<ApiSpellShape[]> {
    const response = await fetch(`${DND_API_BASE}/classes/${className}/spells`);
    if (!response.ok) {
        throw new Error(`Failed to fetch spells for class ${className}: ${response.statusText}`);
    }

    const classSpells = await response.json();
    const spellIndices = classSpells.results.map((spell: {index: string}) => spell.index);

    return fetchSpells(spellIndices);
}

/**
 * Resets spell data by fetching fresh data from API and converting to actions
 */
export async function resetSpellData(spellIndices?: string[]): Promise<Record<string, SpellAction>> {
    try {
        let spells: ApiSpellShape[];

        if (spellIndices && spellIndices.length > 0) {
            spells = await fetchSpells(spellIndices);
        } else {
            spells = await fetchAllSpells();
        }

        return convertSpellsToRecord(spells);
    } catch (error) {
        console.error('Failed to reset spell data:', error);
        throw error;
    }
}

export function convertSpell(apiData: ApiSpellShape) {
    const spellAction = new SpellAction({
        name: apiData.name,
        actionTime: checkValidCastingTime(apiData.casting_time),
        actionType: "spell",
        range: apiData.range,
        damageRoll: parseDamage(apiData.damage),
        duration: apiData.duration,
        concentration: apiData.concentration,
        level: apiData.level,
        dc: apiData.dc ? {
            dcSaveType: mapDcTypeToAbilityScore(apiData.dc.dc_type.index),
            dcSuccess: mapDcSuccess(apiData.dc.dc_success)
        } : undefined,
        area_of_effect: apiData.area_of_effect
    });

    return { [apiData.name]: spellAction };
}

// Helper function to convert multiple spells to a record
export function convertSpellsToRecord(apiSpells: ApiSpellShape[]): Record<string, SpellAction> {
    return apiSpells.reduce((acc, spell) => {
        return { ...acc, ...convertSpell(spell) };
    }, {});
}

const validActionTimes = [
    "action",
    "bonusAction",
    "freeAction",
    "legendaryAction",
    "reaction",
    "lairAction",
    "passive"
] as const;

type ValidActionTime = typeof validActionTimes[number];

function checkValidCastingTime(casting_time: string): SpellAction['actionTime'] {
    // Handle common D&D 5e casting times
    const normalizedTime = casting_time.toLowerCase().trim();

    if (normalizedTime.includes('action') && !normalizedTime.includes('bonus')) {
        return "action";
    }
    if (normalizedTime.includes('bonus action')) {
        return "bonusAction";
    }
    if (normalizedTime.includes('reaction')) {
        return "reaction";
    }

    // Check if it's already a valid action time
    if (validActionTimes.includes(casting_time as ValidActionTime)) {
        return casting_time as SpellAction['actionTime'];
    }

    // Default fallback
    return "action";
}

function parseDamage(apiDamage: ApiSpellShape["damage"]): RollSet {
    if (!apiDamage) {
        return {
            baseEffect: [],
            scaling: false
        };
    }

    if (!apiDamage.damage_type) {
        console.log(`Spell has a missing damage type!!!!!`, apiDamage);
    }

    const damageType: DamageType = apiDamage?.damage_type?.name.toLowerCase() as DamageType ?? "force"; // Default to force damage

    const atSlot = apiDamage.damage_at_slot_level;
    const atCharacterLevel = apiDamage.damage_at_character_level;

    // Use whichever scaling is defined
    if (atSlot) {
        const entries = Object.entries(atSlot);
        const [baseLevel, baseDiceStr] = entries[0];

        const base: EffectRoll = {
            effect: parseDieString(baseDiceStr)[0], // Take first die format
            effectType: damageType
        };

        return {
            baseEffect: [base],
            scaling: {
                scalingOrigin: "spellSlotLevel",
                scalingValue: {
                    base: [{
                        effect: parseDieString(entries[1]?.[1] ?? baseDiceStr)[0],
                        effectType: damageType
                    }]
                }
            }
        };
    }

    if (atCharacterLevel) {
        const entries = Object.entries(atCharacterLevel);
        const [baseLevel, baseDiceStr] = entries[0];

        const base: EffectRoll = {
            effect: parseDieString(baseDiceStr)[0], // Take first die format
            effectType: damageType
        };

        return {
            baseEffect: [base],
            scaling: {
                scalingOrigin: "characterLevel",
                scalingValue: {
                    base: [{
                        effect: parseDieString(entries[1]?.[1] ?? baseDiceStr)[0],
                        effectType: damageType
                    }]
                }
            }
        };
    }

    return {
        baseEffect: [],
        scaling: false
    };
}

export function parseDieString(dieString: string): DieFormat[] {
    console.log(`Parsing die string: "${dieString}"`);

    const parts = dieString.split("+").map(p => p.trim());
    const results: DieFormat[] = [];

    for (const part of parts) {
        const match = part.match(/^(\d+)d(\d+)$/);
        if (match) {
            results.push({ n: Number(match[1]), d: Number(match[2]) });
        } else if (!isNaN(Number(part))) {
            results.push({ n: 0, d: 0, flatBonus: Number(part) });
        } else if (part.toUpperCase() === "MOD") {
            // Skip MOD placeholders - they represent variable modifiers
            console.warn(`Skipping MOD placeholder in: ${dieString}`);
            continue;
        } else {
            console.error(`Invalid die string part: "${part}" in: "${dieString}"`);
            throw new Error(`Invalid die string part: ${part}`);
        }
    }

    return results;
}

// Helper function to map API DC type to ability score
function mapDcTypeToAbilityScore(dcType: "dex" | "cha" | "wis" | "con" | "str" | "int"): keyof import("@/app/types").AbilityScores {
    // Handle the case where dcType might be an object with nested properties

    switch (dcType?.toLowerCase()) {
        case 'str':
        case 'strength':
            return 'strength';
        case 'dex':
        case 'dexterity':
            return 'dexterity';
        case 'con':
        case 'constitution':
            return 'constitution';
        case 'int':
        case 'intelligence':
            return 'intelligence';
        case 'wis':
        case 'wisdom':
            return 'wisdom';
        case 'cha':
        case 'charisma':
            return 'charisma';
        default:
            console.warn(`Unknown DC type: ${dcType}, defaulting to wisdom`);
            return 'wisdom';
    }
}

// Helper function to map API DC success to DCType success
function mapDcSuccess(dcSuccess: string): "no effect" | "partial" | "half damage" | "full effect" {
    switch (dcSuccess?.toLowerCase()) {
        case 'none':
        case 'no effect':
            return 'no effect';
        case 'partial':
            return 'partial';
        case 'half':
        case 'half damage':
            return 'half damage';
        case 'full':
        case 'full effect':
            return 'full effect';
        default:
            console.warn(`Unknown DC success type: ${dcSuccess}, defaulting to no effect`);
            return 'no effect';
    }
}


async function resetAndWrite() {
    try {
        const data = await resetSpellData();
        await writeFile('../lib/data/spells/spells.ts', JSON.stringify(data, null, 2), 'utf8');
        console.log('Spells data written successfully');
    } catch (error) {
        console.error('Failed to write spells data:', error);
    }
}
resetAndWrite();
