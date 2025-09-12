import React from 'react';
import styles from "./CharacterCard.module.css";
import {HandCoins, HeartPulse, Pencil, Shield, SquareUserRound, Trash} from "lucide-react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteMock} from "@/app/layout";

type CharacterPreview = {
    id: number,
    HP: number,
    AC: number,
    gold: number,
    avatar?: string,
    name: string,
    class : {name: string, level: number},
    inventory: {name: string, weight: number, rarity: string}[]
}

function CharacterCard({character} : {character: CharacterPreview}) {

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
        deleteMutation.mutate(character.id);
    }

    return (
        <div key={character.id} className={styles.character}>
            <a className={styles.characterTopWrapper} href={`/view-character/${character.id}`}>

                <div className={styles.avatar}>
                    {character.avatar ?

                        <img src={`/${character.avatar}`}/>
                        : <SquareUserRound size={80}/>
                    }
                </div>


                <div className={styles.characterMetaWrapper}>

                    <h2>{character.name}</h2>
                    <p>{character.class.name} - Level {character.class.level}</p>

                    <div>
                        <span><HeartPulse/>{character.HP}</span>
                        <span><Shield/>{character.AC}</span>
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