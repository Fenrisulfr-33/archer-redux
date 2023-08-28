'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import PokemonBaseStats from "./PokemonBaseStats";
import PokemonTypeWeaknesses from "./PokemonTypeWeaknesses";
import PokedexEntries from "./PokedexEntries";
import PokemonMovesListByType from "./PokemonMovesListByType";
import PokemonPageToolbar from "./PokemonPageToolbar";
import PokemonPageGameDropDown from "./PokemonPageGameDropDown";
import PokemonPageInfoSection from "./PokemonPageInfoSection";
import { gameDropDown } from "../variables/pokemonDropDowns";
import Link from "next/link";

export default function PokemonPage({ pokemon, game, goBackRoute }) {
  const router = useRouter();
  // This is for Form Changes, in the future we can limit it if there is no form change.
  const pokemonInitial = () => pokemon;
  const gameInitial = () =>
    game ? gameDropDown[game] : pokemon.gameDropDown[0];
  const movesInitial = () =>
    game ? pokemon.moves[game] : pokemon.moves[pokemon.gameDropDown[0].key];

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
        <PokemonPageToolbar id={selectedPokemon._id} goBackRoute={goBackRoute} />
        <div className="text-5xl font-bold rounded text-center py-5 bg-gradient-to-r from-purple-100 to-purple-600">
          {selectedPokemon.name.english}
        </div>
        {selectedPokemon.formsTab && (
          <div className="border flex flex-row space-x-2">
            {selectedPokemon.formsTab.map((form) => (
              <Link
                href={`/pokemon/national/${form.id}${game ? `/${game}` : ""}`}
                passHref
              >
                <button className="bg-purple-600 py-1 px-2 rounded">
                  {form.name}
                </button>
              </Link>
            ))}
          </div>
        )}

        <PokemonPageInfoSection pokemon={selectedPokemon} />
        <PokemonTypeWeaknesses
          typeOne={selectedPokemon.type.one}
          typeTwo={selectedPokemon.type?.two}
        />
        <PokemonBaseStats stats={selectedPokemon.baseStats} />
        <PokemonPageGameDropDown
          selected={selectedGame}
          setSelected={changeSelectedGame}
          placeholder={`Default: ${selectedGame.title} - select a game`}
          list={selectedPokemon.gameDropDown}
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
