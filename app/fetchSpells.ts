//let's write a script that will fetch data from an api and write down all the spells from dnd 5e

import * as fs from "node:fs";
import {ApiSpellShape} from "@/app/types";
import {convertSpellsToRecord, convertSpellToAction} from "@/app/convertSpellToAction";
import {spells} from "@/app/spells";


async function fetchSpellList(){
    const response = await fetch('https://www.dnd5eapi.co/api/2014/spells');

    if(!response.ok){
        throw new Error("Failed to fetch spells.");
    }

    const data: ResponseData = await response.json();
    return data;
}

async function parseAllSpellsFromAPI(){
    const data: ResponseData = await fetchSpellList();
    const spellResults = data.results;

    const detailedSpells: ApiSpellShape[] = [];

    // Fetch detailed data for each spell
    for(const simpleSpell of spellResults) {
        try {
            const response = await fetch(`https://www.dnd5eapi.co${simpleSpell.url}`);
            if(response.ok) {
                const spellData: ApiSpellShape = await response.json();
                detailedSpells.push(spellData);
            }
        } catch (error) {
            console.error(`Failed to fetch ${simpleSpell.name}:`, error);
        }
    }

    const spellRecord = convertSpellsToRecord(detailedSpells);
    fs.writeFileSync('spells.ts', `export const spells = ${JSON.stringify(spellRecord, null, 2)} as const;`);
}

parseAllSpellsFromAPI();


type ResponseData = {
    count: number,
    results: SimpleSpell[]
}
type SimpleSpell = {
    index: string,
    name: string,
    level: number,
    url: string
}
