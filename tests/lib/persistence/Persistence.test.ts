import { WebDB } from '../../../src/database/web';

interface Character {
    id: string;
    name: string;
    hp: number;
    ac: number;
}

describe('WebDB Tests', () => {
    let db: WebDB;

    beforeEach(async () => {
        db = await WebDB.getInstance();
        await db.initialize();
    });

    test('should initialize without errors', async () => {
        const freshDb = WebDB.getInstance();
        await expect(freshDb).resolves.not.toThrow();
    });

    test('should have seeded initial characters', async () => {
        const characters = await db.query<Character>('SELECT * FROM characters ORDER BY characters.characterId');

        expect(characters).toHaveLength(2);
        expect(characters[0]).toEqual({
            HP: 20,
            characterId: 1,
            name: "something"
        });
        expect(characters[1]).toEqual({
            HP: 18,
            characterId: 2,
            name: "another"
        });
    });

    test('should insert new character', async () => {
        const result = await db.execWithId(
            'INSERT INTO characters (HP, name, characterId) VALUES (?, ?, ?)',
            [15, 'Rogue', null]
        );

        const characters = await db.query<Character>('SELECT * FROM characters WHERE characterId = ?', [result]);
        expect(characters).toHaveLength(1);
        expect(characters[0].name).toBe('Rogue');
    });


    test('should update character', async () => {
        await db.exec(
            'UPDATE characters SET HP = ? WHERE characterId = ?',
            [25, 1]
        );

        const characters = await db.query<Character>('SELECT * FROM characters WHERE characterId = ?', [1]);
        expect(characters[0].HP).toBe(25);
    });


    test('should delete character', async () => {
        await db.exec('DELETE FROM characters WHERE characterId = ?', [1]);

        const characters = await db.query('SELECT * FROM characters WHERE characterId = ?', [1]);
        expect(characters).toHaveLength(0);
    });


    test('should query with parameters', async () => {
        const warriors = await db.query<Character>(
            'SELECT * FROM characters WHERE name = ?',
            ['something']
        );

        expect(warriors).toHaveLength(1);
        expect(warriors[0].name).toBe('something');
    });


    test('should query all characters', async () => {
        const allCharacters = await db.query<Character>('SELECT * FROM characters');
        expect(allCharacters).toHaveLength(2);
    });


    test('should handle complex queries', async () => {
        const strongCharacters = await db.query<Character>(
            'SELECT * FROM characters WHERE HP > ? AND length(NAME) > ? ORDER BY HP DESC',
            [15, 8]
        );

        expect(strongCharacters).toHaveLength(1);
        expect(strongCharacters[0].name).toBe('something');
    });


    test('should return empty array for no matches', async () => {
        const result = await db.query<Character>(
            'SELECT * FROM characters WHERE name = ?',
            ['NonExistent']
        );

        expect(result).toEqual([]);
    });


    test('should protect against SQL injection', async () => {
        const maliciousInput = "'; DROP TABLE characters; --";

        await db.exec(
            'INSERT INTO characters (characterId, name, HP) VALUES (?, ?, ?)',
            [null, maliciousInput, 20]
        );

        const characters = await db.query<Character>('SELECT COUNT(*) as count FROM characters');
        expect(characters.length).toBeGreaterThan(0);
    });
});
