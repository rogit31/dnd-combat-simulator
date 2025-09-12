import {AbstractRepository} from "@/src/persistence/AbstractRepository";
import {AbilityScores} from "@/types";
import {Character} from "@/src/models/character/Character";
import {CharacterClass} from "@/src/models/character/layers/charclass/CharacterClass";
import {WebDB} from "@/src/database/web";
import {Item} from "@/src/models/item/item";

/** Describes the shape of the arguments to be passed when creating a character **/
type CreateCharacterParams = {
    name: string,
    HP: number,
    classes: Map<CharacterClass, number>,
    abilityScores: AbilityScores,
    //background: Background,
    //race: Race
}

/** Handles database operations related to characters. **/
export class CharacterRepository extends AbstractRepository {

    /** The type here could also be Database, but just because I added
     * some extra methods on WebDB we're gonna call it that.  **/

    constructor(private db: WebDB) {
        super();
    }

    public async createCharacter(data: CreateCharacterParams) {

        const result = await this.db.execWithId(`INSERT INTO characters (characterId, name, HP)
                                                 VALUES (?, ?, ?)`);

        /** intermediary table includes the mtm relationships and the levels of the class **/
        for (const cls of data.classes.keys()) {
            this.db.exec(`INSERT INTO classList (charId, classId, level)
                          VALUES (?, ?, ?)`,
                [result, cls.id, data.classes.get(cls)!]) //cannot be null
        }

        /** TODO: continue with the rest of the character's relationships... **/
    }

    public async getData() {
        const result = await this.db.query(`SELECT * FROM characters
        LEFT JOIN inventory ON characters.characterId == inventory.characterId
         LEFT JOIN item ON item.itemId == inventory.itemId`);
        console.log(result);
        const parsed = new Map<string, Character>();
        result.map((r) => {
            if (!parsed.has(r.name)){
                parsed.set(r.name, new Character(r))
            } else {
                parsed.get(r.name)!.inventory.addItem(
                    new Item({name: r.itemName,
                    weightPer: r.itemWeight,
                    description: "",
                    consumable: false}),
                    1)
            }
        })
        return parsed;
    }

    private constructCharacterData() {
        return null;
    }

    public getDb(){
        return this.db;
    }
}