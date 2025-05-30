import { SpellAction } from "@/app/Action";
import {ApiSpellShape, Damage, DamageRoll, DieFormat} from "@/app/types";

export function convertSpellToAction(apiData: ApiSpellShape) {
    const spellAction = new SpellAction({
        name: apiData.name,
        actionTime: checkValidCastingTime(apiData.casting_time),
        actionType: "spell",
        range: apiData.range,
        damageRoll: parseDamage(apiData.damage)
    });

    return { [apiData.name]: spellAction };
}

// Helper function to convert multiple spells to a record
export function convertSpellsToRecord(apiSpells: ApiSpellShape[]): Record<string, SpellAction> {
    return apiSpells.reduce((acc, spell) => {
        return { ...acc, ...convertSpellToAction(spell) };
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
    if (validActionTimes.includes(casting_time as ValidActionTime)) {
        return casting_time as SpellAction['actionTime'];
    } else {
        return "action";
    }
}

function parseDamage(apiDamage: ApiSpellShape["damage"]): Damage {
    if (!apiDamage) {
        return {
            baseDamage: [],
            scaling: false
        };
    }
    if(!apiDamage.damage_type){
        console.log(`Spell has a missing damage type!!!!!`, apiDamage);
    }

    const damageType = apiDamage?.damage_type?.name ?? "unknown";

    const atSlot = apiDamage.damage_at_slot_level;
    const atCharacterLevel = apiDamage.damage_at_character_level;

    // Use whichever scaling is defined
    if (atSlot) {
        const entries = Object.entries(atSlot);
        const [baseLevel, baseDiceStr] = entries[0];

        const base: DamageRoll = {
            damage: parseDieString(baseDiceStr),
            damageType
        };

        return {
            baseDamage: [base],
            scaling: {
                scalingOrigin: "spellSlotLevel",
                scalingValue: {
                    base: {
                        damage: parseDieString(entries[1]?.[1] ?? baseDiceStr),
                        damageType: damageType // Use the safe fallback variable
                    }}
            }
        };
    }

    if (atCharacterLevel) {
        const entries = Object.entries(atCharacterLevel);
        const [baseLevel, baseDiceStr] = entries[0];

        const base: DamageRoll = {
            damage: parseDieString(baseDiceStr),
            damageType
        };

        return {
            baseDamage: [base],
            scaling: {
                scalingOrigin: "characterLevel",
                scalingValue: {
                    base: {
                        damage: parseDieString(entries[1]?.[1] ?? baseDiceStr),
                        damageType: damageType // Use the safe fallback variable
                    }}
            }
        };
    }

    return {
        baseDamage: [],
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