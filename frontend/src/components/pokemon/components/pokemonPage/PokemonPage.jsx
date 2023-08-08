import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import BaseStats from "./BaseStats";
import TypeWeakness from "./TypeWeakness";
import PokedexEntries from "./PokedexEntries";
import MovesListsByType from "./MovesListsByType";
import PokemonIndToolbar from "./PokemonIndToolbar";
import Link from "next/link";
import { InputBox } from "../inputBoxes/InputBox";
import { CustomBox } from "../inputBoxes/CustomBox"
import FormsTabs from "./FormTabs";
import PokemonInfoSection from "./TestPokemonInfoSection";
import TestBox from "../inputBoxes/TestBox";

const Container = ({ children }) => {
  return (
    <div className={"bg-gray-600 rounded-2xl border-2 border-purple-100"}>
      <div className={"m-2 bg-gray-700 rounded-lg"}>{children}</div>
    </div>
  );
};

const InfoRow = ({ title, info, ability }) => (
  <div className="flex flex-row justify-between">
    <div className="label border-2 border-gray-900">{title}:</div>
    {ability ? (
      <Link href={`/pokemon/abilities/${info.id}`} passHref>
        {info.name}
      </Link>
    ) : (
      <p>{info}</p>
    )}
  </div>
);

export default function PokemonPage({
  pokemon,
  game,
  goBackRoute,
  loadPokemonMovesByGame,
}) {
  const router = useRouter();
  const handleGoBack = (event) => {
    event.preventDefault();
    router.push(goBackRoute);
  };
  const [selectedGame, setSelectedGame] = useState(pokemon.gameDropDown[0]);
  const [gameQuery, setGameQuery] = useState(pokemon.gameDropDown[0].query)

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
      <div className='w-1/2'>
      <CustomBox
          value={selectedGame}
          setValue={setSelectedGame}
          placeholder={selectedGame.game}
          list={pokemon.gameDropDown}
        />
        </div>
      <PokemonIndToolbar
        id={pokemon._id}
        game={game}
        // gameDropDown={pokemon.gameDropDown}
      />
      <div className={"col-flex space-y-2"}>
        <h1 className="text-5xl font-bold text-center py-5 text-purple-200">
          {pokemon.name.english}
        </h1>
        <div className={"col-flex space-y-2"}>
          <PokemonInfoSection pokemon={pokemon} />
          <TypeWeakness
            typeOne={pokemon.type.one}
            typeTwo={pokemon.type?.two}
          />
          {pokemon.baseStats && <BaseStats stats={pokemon.baseStats} />}
        </div>
        <MovesListsByType moves={pokemon.moves} />
        <PokedexEntries entries={pokemon.pokedexEntries} />
      </div>
    </div>
  );
}
