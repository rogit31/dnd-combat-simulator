import React from 'react';
import styles from "./CharacterCard.module.css";
import {HandCoins, HeartPulse, Pencil, Shield, SquareUserRound, Trash} from "lucide-react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteMock} from "@/app/layout";
import {MockCharacterType} from "@/types";


function CharacterCard({character} : {character: MockCharacterType}) {

    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: (id: number) => deleteMock(id),
        onSuccess: async () => {
            queryClient.invalidateQueries({queryKey: ["characters"]})
        }
    })

    function handleDelete(e: React.MouseEvent){
        e.stopPropagation();
        e.preventDefault();
        deleteMutation.mutate(character.characterId);
    }

    return (
        <div key={character.characterId} className={styles.character}>
            <a className={styles.characterTopWrapper} href={`/view-character/${character.characterId}`}>

                <div className={styles.avatar}>
                    {character.avatar ?

                        <img src={`/${character.avatar}`}/>
                        : <SquareUserRound size={80}/>
                    }
                </div>


                <div className={styles.characterMetaWrapper}>

                    <h2>{character.name}</h2>
                    {character.classes.map((charClass) => (
                        <div key={charClass.classId}>
                            {charClass.className}
                        </div>
                        ))}

                    <div>
                        <span><HeartPulse/>{character.HP}</span>
                        <span><Shield/>{character.armorClass}</span>
                        <span><HandCoins/>{character.gold}</span>
                    </div>

                    <nav className={styles.characterButtonsWrapper}>
                        <button>
                            <Pencil/>
                        </button>
                        <button onClick={(e) => handleDelete(e)}>
                            <Trash/>
                        </button>
                    </nav>

                </div>

            </a>
        </div>
    );
}

export default CharacterCard;