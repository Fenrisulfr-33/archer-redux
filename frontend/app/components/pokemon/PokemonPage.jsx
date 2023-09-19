"use client";

import { useState } from "react";
import PokemonBaseStats from "./PokemonBaseStats";
import PokemonTypeWeaknesses from "./PokemonTypeWeaknesses";
import PokedexEntries from "./PokedexEntries";
import PokemonMovesListByType from "./PokemonMovesListByType";
import PokemonPageToolbar from "./PokemonPageToolbar";
import PokemonPageGameDropDown from "./PokemonPageGameDropDown";
import PokemonPageInfoSection from "./PokemonPageInfoSection";
import { gameDropDown } from "../variables/pokemonDropDowns";
import MoveGameDropDown from "./MovePageGameDropDownTest";

import Link from "next/link";

export default function PokemonPage({ pokemon, game, goBackRoute }) {
  // This is for Form Changes, in the future we can limit it if there is no form change.
  const pokemonInitial = () =>
    pokemon.formsTab ? pokemon.formsTab[pokemon.startingIndex] : pokemon;
  const gameInitial = () =>
    game
      ? gameDropDown[game]
      : pokemon.formsTab
      ? pokemon.formsTab[pokemon.startingIndex].gameDropDown[0]
      : pokemon.gameDropDown[0];
  const movesInitial = () =>
    game
      ? pokemon.moves[game]
      : pokemon.formsTab
      ? pokemon.formsTab[pokemon.startingIndex].moves[
          pokemon.formsTab[pokemon.startingIndex].gameDropDown[0].key
        ]
      : pokemon.moves[pokemon.gameDropDown[0].key];

  const [selectedPokemon, setSelectedPokemon] = useState(() =>
    pokemonInitial()
  );
  const [selectedGame, setSelectedGame] = useState(() => gameInitial());
  const [selectedMoves, setSelectedMoves] = useState(() => movesInitial());

  const changeSelectedGame = (event) => {
    setSelectedGame(event);
    setSelectedMoves(selectedPokemon.moves[event.key]);
  };

  return (
    <div className={"flex flex-col m-2 font-mono text-center text-white"}>
      <div className={"col-flex space-y-2"}>
        <PokemonPageToolbar
          id={selectedPokemon._id}
          goBackRoute={goBackRoute}
        />
        <div className="text-5xl font-bold rounded text-center py-5 bg-gradient-to-r from-purple-100 to-purple-600">
          {selectedPokemon.name.english}
        </div>
        {selectedPokemon.formsTab && (
          <div className=" bg-gray-700 flex flex-row rounded border-2 border-purple-100">
            <div className="p-2 space-x-2">
              {selectedPokemon.formsTab.map((form, index) => (
                <button
                  onClick={() => setSelectedPokemon(pokemon.formsTab[index])}
                  className={`bg-gray-900 rounded-lg py-2 px-4 m-1 text-gray-100 border-2 border-purple-50 ${
                    form.id === selectedPokemon._id ? " shadow-selected" : ""
                  }`}
                >
                  {form.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <PokemonPageInfoSection pokemon={selectedPokemon} />
        <PokemonTypeWeaknesses
          typeOne={selectedPokemon.type.one}
          typeTwo={selectedPokemon.type?.two}
        />
        <PokemonBaseStats stats={selectedPokemon.baseStats} />
        {/* <PokemonPageGameDropDown
          selected={selectedGame}
          setSelected={changeSelectedGame}
          placeholder={`Default: ${selectedGame.title} - select a game`}
          list={selectedPokemon.gameDropDown}
        /> */}
        <MoveGameDropDown
          list={selectedPokemon.gameDropDown}
          selected={selectedGame}
          setSelected={changeSelectedGame}
          placeholder={"Select a Game"}
        />
        <PokemonMovesListByType
          moves={selectedMoves}
          pokemonName={selectedPokemon.name.english}
        />
        <PokedexEntries entries={selectedPokemon.pokedexEntries} />
      </div>
    </div>
  );
}
