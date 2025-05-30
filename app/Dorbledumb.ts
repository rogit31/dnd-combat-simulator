import {Character} from "@/app/Character";

const Dorbledumb = new Character({
    id: "Dorbledumb",
    name: "Dorbledumb",
    level: 11,
    HP: 68,
    AC: 14,
    abilityScores: {
        strength: 8,
        dexterity: 10,
        constitution: 14,
        intelligence: 19,
        wisdom: 15,
        charisma: 10
    },
    savingThrows: {
        intelligence: 8,
        wisdom: 6
    },
    actions: [Fireball],
    side: "ally",
})