import {beforeEach, describe} from "@jest/globals";
import {Character} from "../../../src/models/character/Character"
import {Background} from "../../../src/models/character/layers/background/Background";
import {Race} from "../../../src/models/character/layers/race/Race";
import {CharacterClass} from "../../../src/models/character/layers/charclass/CharacterClass";
import {AbilityScore} from "@/types";
import {Item} from "../../../src/models/item/item"
import {Feature} from "../../../src/models/character/feature/Feature";
import {Action} from "../../../src/models/character/actions/Action";

describe('Character', () => {

    let char1: Character;
    let char2: Character;
    let feat1: Feature;
    let feat2: Feature;
    let feat3: Feature;
    let back: Background;
    let race: Race;
    let charClass: CharacterClass;

    function setupFeatures() {
        feat1 = new Feature("feat1", "", [new Action({name: "act1", actionType: "feature"})]);
        feat2 = new Feature("feat2", "", undefined, [{stat: "deception", amount: 15, base: "charisma"}]);
        feat3 = new Feature("feat3", "", [new Action({name: "act2", actionType: "feature"})], [{stat: "testStat", amount: 2, base: "strength"}]);
    }

    function setupBackground(): void {
        const proficiencies = new Map<string, AbilityScore>();
        proficiencies.set("stealth", "dexterity");
        const items = new Map<Item, number>;
        items.set(new Item({id:1, name:"item1", weightPer: 4, description: ""}), 3);
        back = new Background(
            {
                name: "back1",
                proficiencies: proficiencies,
                startingEquipment: items,
                features: [feat1]
            }
        )
    }

    function setupRace(): void {
        race = new Race(
            {
                name: "race1",
                speed: 30,
                size: "Medium",
                abilityScoreIncrease: {
                    strength: 2,
                    dexterity: 0,
                    constitution: 1,
                    intelligence: 0,
                    wisdom: 0,
                    charisma: 0
                },
                resistances: ["bludgeoning"],
                vulnerabilities: ["lightning"],
                features: [feat2]
            }
        )
    }

    function setupClasses(): void {
        const proficiencies = new Map<string, AbilityScore>();
        proficiencies.set("athletics", "strength");
        proficiencies.set("survival", "wisdom");
        charClass = new CharacterClass(
            {
                name: "class1",
                spellCastingModifierBase: "wisdom",
                hitDie: [{n: 2, d: 12}],
                hitPointsAtFirstLevel: 10,
                hitPointsScaling: {
                    base: [{n: 1, d: 12}],
                    modifier: "strength"
                },
                startingEquipment: new Map<Item, number>(),
                features: [feat3],
                proficiencies: proficiencies
            }
        )
    }

    function setupCharacters(): void {
        const classes = new Map<CharacterClass, number>;
        classes.set(charClass, 1);
        char1 = new Character(
            {
                id: "1",
                level: 1,
                maxHP: 10,
                name: "char1",
                side: "ally",
                classes: classes,
                race: race,
                background: back,
            } // TODO change feat mods so that it includes AbilityScore
        )

        char2 = new Character({
            id: "2",
            level: 10,
            maxHP: 50,
            HP: 25,
            name: "char2",
            side: "ally",
            classes: classes,
            race: race,
            background: back,
        })
    }

    beforeEach(async () => {
        setupFeatures();
        setupBackground();
        setupRace();
        setupClasses();
        setupCharacters();
    });

    test("should inherit abilityScore increase and proficiencies from layers", () => {
        expect(char1.getStat("strength")).toEqual(12);
        expect(char1.getStat("constitution")).toEqual(11);
        expect(char1.getStat("intelligence")).toEqual(10);

        expect(char1.getModifier("strength")).toEqual(1);
        expect(char1.getModifier("dexterity")).toEqual(0);
        expect(char1.getModifier("stealth")).toEqual(2);
        expect(char1.getModifier("athletics")).toEqual(3);
        expect(char1.getModifier("survival")).toEqual(2);
        expect(char1.getModifier("history")).toEqual(0);

        expect(char2.getModifier("stealth")).toEqual(4);
        expect(char2.getModifier("athletics")).toEqual(5);
        expect(char2.getModifier("survival")).toEqual(4);
        expect(char2.getModifier("history")).toEqual(0);
    });

    test("should inherit items from layers", () => {
        expect(char1.getInventory().size).toEqual(1);
        const item = char1.getInventory().keys().toArray()[0];
        expect(item.name).toEqual("item1");
        expect(char1.getInventory().get(item)).toEqual(3);
    });

    test("Feats should affect the characters stats and actions", () => {
        expect(char1.getFeatures().length).toEqual(3);
        expect(char1.getFeatures().includes(feat1)).toBe(true);
        expect(char1.getFeatures().includes(feat2)).toBe(true);
        expect(char1.getFeatures().includes(feat3)).toBe(true);

        expect(char1.getActions().length).toEqual(2);
        expect(char1.getActions()[0].name).toEqual("act2");
        expect(char1.getActions()[1].name).toEqual("act1");

        expect(char1.getModifier("deception")).toEqual(15);
        expect(char1.getModifier("testStat")).toEqual(3);
    });

})
