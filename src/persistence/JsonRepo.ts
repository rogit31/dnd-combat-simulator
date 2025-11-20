import {AbstractRepository} from "@/src/persistence/AbstractRepository";
import {MockCharacterType} from "@/types";

export class JsonRepo extends AbstractRepository{


    public async updateData(data: MockCharacterType): Promise<MockCharacterType> {
        const jsonData = localStorage.getItem("data");

        if(!jsonData){
            console.error("Write mock was called but a local storage item `data` was not found.");
            return data;
        }
        const storedData : MockCharacterType[] = JSON.parse(jsonData);
        const newData = storedData.map(c  => c.characterId === data.characterId ? data : c);
        localStorage.setItem("data", JSON.stringify(newData));
        return data;
    }


    public async getData(): Promise<MockCharacterType[]> {

        if (typeof window === "undefined") return []; // guard for SSR
        let data = localStorage.getItem("data");

        if (!data) {
            try{
                const response = await fetch('../data/mockData.json');
                const mockData = await response.json();
                localStorage.setItem("data", mockData);
                data = JSON.stringify(mockData);
            } catch (e) {
                console.error("Error writing mock data to empty local storage: ", e);
            }
            console.log("Mock data written!");
        }

        try {
            const parsed = JSON.parse(data!);
            console.log("Local data parsed:", parsed);
            return parsed;
        } catch (err) {
            console.error("Failed to parse localStorage data:", err);
            return [];
        }
    }

    public async deleteData(id: number) : Promise<boolean> {
        //TODO: Implement
        return true;
    }

    public async createData() : Promise<boolean> {
        //TODO: Implement
        return true;
    }

}