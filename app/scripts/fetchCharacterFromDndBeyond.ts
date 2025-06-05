import {Welcome} from "@/app/types/dndBeyondApiType";
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
        level:
    }

}