import {useMutation, useQueryClient} from "@tanstack/react-query";
import {writeMock} from "@/app/layout";
import {MockCharacterType} from "@/types";

export function useUpdateCharacter() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: writeMock,
        onSuccess: (updatedCharacter) => {
            queryClient.setQueryData(["characters"], (old: MockCharacterType[]) => {
                return old.map(c =>
                c.characterId == updatedCharacter.characterId ? updatedCharacter : c);
            })
        }
    })
}