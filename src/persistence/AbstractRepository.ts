import {WebDB} from "@/src/database/web";
import {MockCharacterType} from "@/types";

/**
 * this interface defines our abstraction for how to persist data.
 * could for example contain some abstract definitions for common crud operations for our repositories to inherit **/
export abstract class AbstractRepository {
    //TODO: Move persistence logic from frontend to a class here so that the frontend just calls a method declared here
    //TODO: Then implement that method in a naive JSON format for now
    abstract createData() : Promise<boolean>;
    abstract getData() : Promise<any>; //TODO: decide on a type of answer here
    abstract updateData(updatedData: MockCharacterType) : Promise<MockCharacterType>;
    abstract deleteData(id: number) : Promise<boolean>;
}