"use client"

import {JsonRepo} from "@/src/persistence/JsonRepo";
import {AbstractRepository} from "@/src/persistence/AbstractRepository";

/** Factory that returns the repository implementation used. This file exists to make switching in between
 * persistence methods easier, and maybe in the future dynamic/user controlled. For now, we're just going to
 * return the json repo, but it could return sqlite if it detects the runtime as electron for example.**/

export function createRepository() : AbstractRepository {
    return new JsonRepo();
}