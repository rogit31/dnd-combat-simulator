"use client"
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {useRepository} from "@/app/RepositoryProvider";
import {MockCharacterType} from "@/types";

/** Custom react hook implementation that calls the fetch function and is used to populate data throughout the app. **/
export function useCharacters() : UseQueryResult<MockCharacterType[], unknown> {
    const repo = useRepository();
    return useQuery({
        queryKey: ["characters"],
        queryFn: () => repo.getData(),
        staleTime: 360,
    })
}