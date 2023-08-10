import { useRouter } from "next/router";
import { useState } from "react";
import BaseStats from "./BaseStats";
import TypeWeakness from "./TypeWeakness";
import PokedexEntries from "./PokedexEntries";
import MovesListsByType from "./MovesListsByType";
import PokemonIndToolbar from "./PokemonIndToolbar";
import GameDropDown from "../inputBoxes/GameDropDown";
import PokemonInfoSection from "./PokemonInfoSection";
import { gameDropDown } from "../../variables/gameDropDown";

export default function PokemonPage({
  pokemon,
  game,
  goBackRoute,
}) {
  const router = useRouter();
  // This is for Form Changes, in the future we can limit it if there is no form change.
  const pokemonInitial = () => pokemon;
  const gameInitial = () => game ? gameDropDown[game] : pokemon.gameDropDown[0];
  const movesInitial = () => game ? pokemon.moves[game] : pokemon.moves[pokemon.gameDropDown[0].key];

  const [selectedPokemon, setSelectedPokemon] = useState(() =>
    pokemonInitial()
  );
  const [selectedGame, setSelectedGame] = useState(() => gameInitial());
  const [selectedMoves, setSelectedMoves] = useState(() => movesInitial());

  const changeSelectedGame = (event) => {
    setSelectedGame(event);
    setSelectedMoves(selectedPokemon.moves[event.key]);
  };

  const handleGoBack = (event) => {
    event.preventDefault();
    router.push(goBackRoute);
  };

  return (
    <div
      className={
        "flex flex-col w-11/12 m-auto py-5 font-mono text-center text-white"
      }
    >
      <div className="flex justify-center">
        <button className={"button flex"} onClick={handleGoBack}>
          Go Back
        </button>
      </div>

      <div className={"col-flex space-y-2"}>
        <PokemonIndToolbar id={selectedPokemon._id} />
        <div className="text-5xl font-bold rounded text-center py-5 bg-gradient-to-r from-purple-100 to-purple-600">
          {selectedPokemon.name.english}
        </div>
        <div className={"col-flex space-y-2"}>
          <PokemonInfoSection pokemon={selectedPokemon} />
          <TypeWeakness
            typeOne={selectedPokemon.type.one}
            typeTwo={selectedPokemon.type?.two}
          />
          {selectedPokemon.baseStats && (
            <BaseStats stats={selectedPokemon.baseStats} />
          )}
        </div>
        <div className="">
          <GameDropDown
            selected={selectedGame}
            setSelected={changeSelectedGame}
            placeholder={`Default: ${selectedGame.game} - select a game`}
            list={selectedPokemon.gameDropDown}
          />
        </div>
        <MovesListsByType
          moves={selectedMoves}
          pokemonName={selectedPokemon.name.english}
        />
        <PokedexEntries entries={selectedPokemon.pokedexEntries} />
      </div>
    </div>
  );
}
