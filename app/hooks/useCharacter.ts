"use client"
import { useQuery } from "@tanstack/react-query";
import {fetchMock} from "@/app/layout";

/** Custom react hook implementation that calls the fetch function and is used to populate data throughout the app. **/
export function useCharacters() {
    return useQuery({
        queryKey: ["characters"],
        queryFn: fetchMock,
        staleTime: 360,
    })
}