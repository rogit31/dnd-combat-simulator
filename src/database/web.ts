import initSqlJs from "sql.js";
import { Database } from "./index";
import { Database as DbType } from 'sql.js/index';
import {SqlValue} from "@/types";

/**Represents the web implementation of our persistence system in sql.js
Singleton pattern to ensure there's only one db at a time in memory **/
export class WebDB implements Database {

    private static instance: WebDB | null = null;
    private db: DbType | undefined;

    private constructor() {
    }

    static async getInstance() : Promise<WebDB> {
        if(WebDB.instance !== null){
            return WebDB.instance;
        } else {
            WebDB.instance = new WebDB();
            await WebDB.instance.initialize();
            console.log(this.instance);
            return WebDB.instance;
        }
    }

    async initialize() {

        const path = this.getWasmPath();
        //es
        const SQL = await initSqlJs({ locateFile : file => path}); //this file resolution is struggling to be accurate
        this.db = new SQL.Database();

        // Enable foreign key relationships
        this.db.run(`PRAGMA foreign_keys = ON;`);

        // Create tables if they don't exist
        this.db.run(`
      CREATE TABLE IF NOT EXISTS characters (
          characterId INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          HP INTEGER
      );`);

        this.db.run(`
        CREATE TABLE IF NOT EXISTS classList(
            charId INTEGER,
            classId INTEGER,
            level INTEGER,
            PRIMARY KEY (charId, classId),
            FOREIGN KEY (charId) REFERENCES characters(characterId) ON DELETE CASCADE,
            FOREIGN KEY (classId) REFERENCES class(classId) ON DELETE CASCADE
        );`);

        this.db.run(`
        CREATE TABLE IF NOT EXISTS class(
            classId INTEGER PRIMARY KEY AUTOINCREMENT,
            className TEXT,
            spellCastingMod TEXT,
            hitDie TEXT,
            hitPointsAtFirstLevel INTEGER,
            hitPointScaling TEXT,
            proficienciesId INTEGER,
            modifiersId INTEGER,
            startingEquipmentId INTEGER
        );`);

        this.db.run(`
        CREATE TABLE IF NOT EXISTS stats(
            statName TEXT PRIMARY KEY UNIQUE
        );`);

        this.db.run(`
        CREATE TABLE IF NOT EXISTS proficiency(
            proficiencyId INTEGER PRIMARY KEY AUTOINCREMENT,
            proficiencyName TEXT,
            category TEXT
        );`);

        this.db.run(`
        CREATE TABLE IF NOT EXISTS item(
            itemId INTEGER PRIMARY KEY AUTOINCREMENT, 
            itemName TEXT,
            itemWeight INTEGER
        );`);

        this.db.run(`
        CREATE TABLE IF NOT EXISTS inventory(
            itemId INTEGER,
            characterId INTEGER,
            PRIMARY KEY (itemId, characterId),
            FOREIGN KEY (itemId) REFERENCES item(itemId),
            FOREIGN KEY (characterId) REFERENCES characters(characterId) ON DELETE CASCADE
        );`);

        this.db.run(`
        CREATE TABLE IF NOT EXISTS modifier(
            modifierId INTEGER PRIMARY KEY AUTOINCREMENT,
            origin TEXT,
            target TEXT,
            operation TEXT,
            modCondition TEXT,
            modPhase TEXT
        );`)

        // Seed data
        // Later we will be seeding it using either a save file
        // or the data pulled form the 5e api if no save file is found
        this.db.run(`
      INSERT INTO characters (characterId, name, HP) VALUES
      (null, "something", 20),
      (null, "another", 18)
    `);

        this.db.run(`
        INSERT INTO item (itemId, itemName, itemWeight) VALUES (null, "Item", 8);
        INSERT INTO item (itemId, itemName, itemWeight) VALUES (null, "Item2", 9);`);

        this.db.run(`
        INSERT INTO inventory(itemId, characterId) VALUES (1, 1);
        INSERT INTO inventory(itemId, characterId) VALUES (1, 2);
        INSERT INTO inventory(itemId, characterId) VALUES (2, 1);`)
    }

    //Specifically to enable generic return types.
    /* eslint-disable */
    async query<T = any>(sql: string, params: SqlValue[] = []) {
    /* eslint-enable */
        if(this.db === undefined){
            throw new Error("Database has not been initialized.");
        }
            const stmt = this.db.prepare(sql);
            stmt.bind(params);
            const results = [];
            while (stmt.step()) results.push(stmt.getAsObject());
            stmt.free();
            return results as T[];
    }

    async exec(sql: string, params: SqlValue[] = []) {
        if(this.db === undefined) {
            throw new Error("Database has not been initialized.");
        }
        const stmt = this.db.prepare(sql);
        stmt.bind(params);
        stmt.step();
        stmt.free();
    }

    async execWithId(sql: string, params: SqlValue[] = []) : Promise<number> {
        if(this.db === undefined) {
            throw new Error("Database has not been initialized.");
        }
        const stmt = this.db.prepare(sql);
        stmt.bind(params);
        stmt.step();
        stmt.free();

        const row = await this.query<{ id: number }>("SELECT last_insert_rowid() as id");
        return row[0].id;
    }


    async export(){
        return this.db?.export();
    }

    async load(file: File) {
        const bin = await file.arrayBuffer();
        const uInt = new Uint8Array(bin);
        const SQL = await initSqlJs();
        this.db = new SQL.Database(uInt);
    }

    private getWasmPath() {
        if(process.env.NODE_ENV === 'test' || typeof jest !== "undefined") {
            return 'node_modules/sql.js/dist/sql-wasm.wasm';
        }
        return '/sql-wasm.wasm';
    }

}
