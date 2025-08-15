import {Actions, Data, DataClass, Stat, Welcome} from "@/app/types/dndBeyondApiType";
import {Character} from "@/app/types";

const dndBeyondApiURL = "https://character-service.dndbeyond.com/character/v5/character/";


async function fetchData(characterId: number){
    try{
        const response =  await fetch(`${dndBeyondApiURL}${characterId}`)

        if (!response.ok) {
            console.error("Non-OK response from D&D Beyond:", response.statusText);
            return null;
        }

        const data = await response.json();
        return data as Welcome;
    } catch (e){
        console.error("Error fetching data from dndbeyond, check if your character is public.", e);
        return null;
    }
}

async function transferData(characterId: number){
    const data: Welcome | null = await fetchData(characterId);

    if(!data || !data.success){
        console.error("Error transferring data from dndbeyond.");
        return;
    }

    const characterData: Character = {
        name: data.data.name,
        id: `${data.data.name}-characterId`, //TODO: prob make this UUID
        level: data.data.classes.length,
        HP: parseHPFromClasses(data.data.classes),
        classes: parseClasses(data.data.classes),
        abilityScores: parseAbilityScores(data.data.stats),
    }

}

function parseHPFromClasses(data: DataClass[]){
    let totalHP = 0;
    let hitPoints = 0;
    for(const datum of data){
        totalHP += datum.level * datum.subclassDefinition.hitDice
    }
    return totalHP
}

function parseClasses(data: DataClass[]){
    return data.map(({level, subclassDefinition}) => ({
        level: level,
        hitDice: subclassDefinition.hitDice,
        name: subclassDefinition.name
    }))
}

function parseAbilityScores(data: Stat[]){
    return {
        strength: data[0].value || 10,
        dexterity: data[1].value || 10,
        constitution: data[2].value || 10,
        intelligence: data[3].value || 10,
        wisdom: data[4].value || 10,
        charisma: data[5].value || 10
    }
}

function parseActions(data: Actions){

    const actions = [];
    for(const key in data){

        const actionPer = data[key as keyof Actions];
        if(actionPer){
            actions.push(...actionPer);
        }
    }

    return actions;
}