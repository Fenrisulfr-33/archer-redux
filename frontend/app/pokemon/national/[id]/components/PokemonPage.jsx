"use client";

import { useState } from "react";
import BaseStats from "./BaseStats";
import TypeWeakness from "./TypeWeakness";
import PokedexEntries from "./PokedexEntries";
import MovesList from "./MoveTypeLists";
import Toolbar from "./Toolbar";
import InfoSection from "./InfoSection";
import GameDropDown from "@/components/pokemon/GameDropDown";
import { pokemonGameDropDown } from "@/constants/pokemonGameDropDown";

import DataContainer from "@/app/components/pokemon/DataContainer";
import DataSection from "@/app/components/pokemon/DataSection";
import PokemonCard from "@/components/pokemon/PokemonCard";

export default function PokemonPage({ pokemon, game, goBackRoute }) {
    const pokemonInitial = () =>
        pokemon.formsTab ? pokemon.formsTab[pokemon.startingIndex] : pokemon;
    const gameInitial = () => {
        if (game) {
            return pokemonGameDropDown[game];
        } else {
            if (pokemon.formsTab) {
                return pokemon.formsTab[pokemon.startingIndex].gameDropDown[0];
            } else {
                if (pokemon.gameDropDown.length > 0) {
                    return pokemon.gameDropDown[0];
                }
            }
        }
    };

    const movesInitial = () =>
        game
            ? pokemon.moves[game]
            : pokemon.formsTab
            ? pokemon.formsTab[pokemon.startingIndex].moves[
                  pokemon.formsTab[pokemon.startingIndex].gameDropDown[0].key
              ]
            : pokemon.gameDropDown[0]
            ? pokemon.moves[pokemon.gameDropDown[0].key]
            : {};

    const [selectedPokemon, setSelectedPokemon] = useState(() =>
        pokemonInitial()
    );
    const [selectedGame, setSelectedGame] = useState(() => gameInitial());
    const [selectedMoves, setSelectedMoves] = useState(() => movesInitial());

    const changeSelectedGame = (event) => {
        setSelectedGame(event);
        setSelectedMoves(selectedPokemon.moves[event.key]);
    };

    let start = null;
    if (pokemon.evolution){
        start = pokemon.evolution.start;
    }

    return (
        <div className={"flex flex-col m-2 font-mono text-center text-white"}>
            <div className={"col-flex space-y-2"}>
                <Toolbar id={selectedPokemon._id} goBackRoute={goBackRoute} />
                <div className="text-xl phone:text-5xl font-bold rounded text-center py-5 bg-gradient-to-r from-purple-100 to-purple-600">
                    {selectedPokemon.name.english}
                </div>
                {selectedPokemon.formsTab && (
                    <div className=" bg-gray-700 flex flex-row rounded border-2 border-purple-100">
                        <div className="p-2 space-x-2">
                            {selectedPokemon.formsTab.map((form, index) => (
                                <button
                                    onClick={() =>
                                        setSelectedPokemon(
                                            pokemon.formsTab[index]
                                        )
                                    }
                                    className={`bg-gray-900 rounded-lg py-2 px-4 m-1 text-gray-100 border-2 border-purple-50 ${
                                        form.id === selectedPokemon._id
                                            ? " shadow-selected"
                                            : ""
                                    }`}
                                >
                                    {form.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                <InfoSection pokemon={selectedPokemon} />
                <TypeWeakness
                    typeOne={selectedPokemon.type.one}
                    typeTwo={selectedPokemon.type?.two}
                />

                {(start && pokemon.evolution._id) && (
                    <div className="-m-2">
                        <DataContainer title={"Evolution"}>
                            <DataSection>
                            <div className="col-flex space-y-5 mx-auto tablet:row-flex tablet:justify-evenly tablet:space-y-0 tablet:mx-0">
                                {start && <PokemonCard pokemon={start}/>}
                                {start.how && <div className="flex items-center mx-auto">{`${start.how} >`}</div>}
                                {start.next && <PokemonCard pokemon={start.next} />}
                                {start.next.how && <div className="flex items-center mx-auto">{`${start.next.how} >`}</div>}
                                {start.next.next && <PokemonCard pokemon={start.next.next} />}
                            </div>
                            </DataSection>
                        </DataContainer>
                    </div>
                )}

                <BaseStats stats={selectedPokemon.baseStats} />
                {selectedPokemon.gameDropDown.length > 0 && (
                    <GameDropDown
                        list={selectedPokemon.gameDropDown}
                        selected={selectedGame}
                        setSelected={changeSelectedGame}
                        placeholder={"Select a Game"}
                    />
                )}
                <MovesList
                    moves={selectedMoves}
                    pokemonName={selectedPokemon.name.english}
                />
                {Object.keys(selectedPokemon.pokedexEntries).length > 0 && (
                    <PokedexEntries entries={selectedPokemon.pokedexEntries} />
                )}
            </div>
        </div>
    );
}
