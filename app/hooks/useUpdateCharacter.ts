import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MockCharacterType} from "@/types";
import {useRepository} from "@/app/RepositoryProvider";

export function useUpdateCharacter() {
    const queryClient = useQueryClient();
    const repo = useRepository();
    return useMutation({
        mutationFn: (updatedCharacter: MockCharacterType) => repo.updateData(updatedCharacter),
        onSuccess: (updatedCharacter) => {
            queryClient.setQueryData(["characters"], (old: MockCharacterType[]) => {
                return old.map(c =>
                c.characterId == updatedCharacter.characterId ? updatedCharacter : c);
            })
        }
    })
}