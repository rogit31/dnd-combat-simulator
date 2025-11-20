import {WebDB} from "@/src/database/web";

/**
 * this interface defines our abstraction for how to persist data.
 * could for example contain some abstract definitions for common crud operations for our repositories to inherit **/
export abstract class AbstractRepository {
    //TODO: Move persistence logic from frontend to a class here so that the frontend just calls a method declared here
    //TODO: Then implement that method in a naive JSON format for now
}