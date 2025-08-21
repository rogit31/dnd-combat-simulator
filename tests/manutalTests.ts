import {WebDB} from "@/src/database/web";

/** Manual tests to be conducted on the browser's console. **/
export const manualTests = {
    async basicTest() {
        const db = await WebDB.getInstance();
        await db.initialize();

        console.log('Initial characters:');
        const characters = await db.query('SELECT * FROM characters');
        console.table(characters);

        await db.exec(
            'INSERT INTO characters (characterId, name, HP) VALUES (?, ?, ?)',
            [null, 'TestChar', 100]
        );

        console.log('After insert:');
        const updated = await db.query('SELECT * FROM characters');
        console.table(updated);

        return 'Test completed successfully!';
    },

    async performanceTest() {
        const db = await WebDB.getInstance();
        await db.initialize();

        console.time('Insert 1000 characters');
        for (let i = 0; i < 1000; i++) {
            await db.exec(
                'INSERT INTO characters (characterId, name, HP) VALUES (?, ?, ?)',
                [null, `Character${i}`, Math.floor(Math.random() * 100)]
            );
        }
        console.timeEnd('Insert 1000 characters');

        console.time('Query all characters');
        const all = await db.query('SELECT COUNT(*) as total FROM characters');
        console.timeEnd('Query all characters');

        console.log(`Total characters: ${all[0].total}`);

        return 'Performance test completed!';
    }
};