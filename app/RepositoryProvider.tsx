"use client"

import {createContext, ReactNode, useContext, useMemo} from "react";
import {createRepository} from "@/src/persistence/RepositoryFactory";
import {AbstractRepository} from "@/src/persistence/AbstractRepository";

const RepositoryContext = createContext<AbstractRepository | null>(null);

export function RepositoryProvider({children} : {children: ReactNode}) {
    const repo: AbstractRepository | null = useMemo(() => createRepository(), []);

    return (
        <RepositoryContext.Provider value={repo}>
            {children}
        </RepositoryContext.Provider>
    )
}

export function useRepository() {
    const repo = useContext(RepositoryContext);
    if(!repo) throw new Error("Repository not initialized!");
    return repo;
}