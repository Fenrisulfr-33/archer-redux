import { useRouter } from "next/router";
import Image from "next/image";
import BaseStats from "./BaseStats";
import TypeWeakness from "./TypeWeakness";
import PokedexEntries from "./PokedexEntries";
import MovesListsByType from "./MovesListsByType";
import PokemonIndToolbar from "./PokemonIndToolbar";
import Link from "next/link";

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
export default function PokemonPage({ pokemon, game, goBackRoute }) {
  const router = useRouter();
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
      <div className='flex justify-center'>
        <button className={'button flex'} onClick={handleGoBack}>
          Go Back
        </button>
      </div>
      <PokemonIndToolbar
        id={pokemon._id}
        game={game}
        gameDropDown={pokemon.gameDropDown}
      />
      <div className={"col-flex space-y-2"}>
        <h1 className="text-5xl font-bold text-center py-5 text-purp-200">
          {pokemon.name.english}
        </h1>
        <div className={"col-flex space-y-2 col-flex"}>
          <div className="col-flex p-2 space-y-2 bg-gray-600 rounded-2xl border-2 border-purp-100">
            <h1 className="text-2xl font-extrabold">Pokedex Information</h1>
            <div className={"col-flex text-sm tablet:text-md tablet:flex-row "}>
              <div className="col-flex m-1 rounded-lg bg-gray-800 space-y-2 p-2 tablet:w-1/2">
                <div className="flex justify-center">
                  <Image
                    src={`/hires/${pokemon._id}.png`}
                    alt={`${pokemon.name.english}`}
                    height={100}
                    width={100}
                    className="rounded-md border-2 border-gray-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <InfoRow title={"National Dex"} info={pokemon._id} />
                  <InfoRow title={"Species"} info={pokemon.species} />
                  <InfoRow title={"height"} info={pokemon.info.height} />
                  <InfoRow title={"Weight"} info={pokemon.info.weight} />
                  <InfoRow
                    title={"Egg Groups"}
                    info={
                      pokemon.eggGroups?.[1]
                        ? `${pokemon.eggGroups[0]}, ${pokemon.eggGroups[1]}`
                        : `${pokemon.eggGroups[0]}`
                    }
                  />
                  <InfoRow
                    title={"Gender Ratio"}
                    info={
                      pokemon.gender.genderless ? (
                        "Genderless"
                      ) : (
                        <>
                          <span className="text-blue-400">
                            M: ${pokemon.gender.male}
                          </span>
                          <span className="text-pink-400">
                            {" "}
                            F: ${pokemon.gender.female}
                          </span>
                        </>
                      )
                    }
                  />
                </div>
              </div>
              <div className="m-1 col-flex rounded-lg bg-gray-800 space-y-1 p-2 tablet:w-1/2">
                <div className="flex flex-row justify-between">
                  <h4 className={"label gray-border"}>Pokemon Type:</h4>
                  <span className={"flex flex-row space-x-1"}>
                    <Image
                      src={`/types/${pokemon.type.one}.svg`}
                      alt={`${pokemon.type.one}`}
                      height={40}
                      width={40}
                    />
                    {pokemon.type?.two && (
                      <Image
                        src={`/types/${pokemon.type.two}.svg`}
                        alt={`${pokemon.type.two}`}
                        height={40}
                        width={40}
                      />
                    )}
                  </span>
                </div>
                {pokemon.abilities.one.name ? (
                  <InfoRow
                    title={"Ability 1"}
                    info={pokemon.abilities.one}
                    ability={true}
                  />
                ) : null}
                {pokemon.abilities?.two?.name ? (
                  <InfoRow
                    title={"Ability 2"}
                    info={pokemon.abilities.two}
                    ability={true}
                  />
                ) : null}
                {pokemon.abilities?.hidden?.name ? (
                  <InfoRow
                    title={"Hidden"}
                    info={pokemon.abilities.hidden}
                    ability={true}
                  />
                ) : null}
                <div className={"col-flex space-y-1"}>
                  <div className={"label-purp"}>Evs:</div>
                  {pokemon.evs.hp && (
                    <InfoRow title={"HP"} info={pokemon.evs.hp} />
                  )}
                  {pokemon.evs.atk && (
                    <InfoRow title={"Atk"} info={pokemon.evs.atk} />
                  )}
                  {pokemon.evs.def && (
                    <InfoRow title={"Def"} info={pokemon.evs.def} />
                  )}
                  {pokemon.evs.spatk && (
                    <InfoRow title={"SpAtk"} info={pokemon.evs.spatk} />
                  )}
                  {pokemon.evs.spdef && (
                    <InfoRow title={"SpDef"} info={pokemon.evs.spdef} />
                  )}
                  {pokemon.evs.spd && (
                    <InfoRow title={"Spd"} info={pokemon.evs.spd} />
                  )}
                </div>
                <InfoRow title={"Catch Rate"} info={pokemon.catchRate} />
                <InfoRow
                  title={"Base Friendship"}
                  info={pokemon.baseFriendship}
                />

                <InfoRow title={"Base Exp."} info={pokemon.baseExp} />
                <InfoRow title={"Growth Rate"} info={pokemon.growthRate} />
                <InfoRow title={"Egg Cycles"} info={pokemon.eggCycles} />
              </div>
            </div>
          </div>
          <BaseStats stats={pokemon.baseStats} />
        </div>
        <TypeWeakness typeOne={pokemon.type.one} typeTwo={pokemon.type?.two} />
        <div>
          <h2>Comp Pages</h2>
          <a
            target="_blank"
            href={`https://www.smogon.com/dex/sv/pokemon/${pokemon.name.english.toLowerCase()}`}
            rel="noopener noreferrer"
          >
            Scarlet/Violet
          </a>
        </div>
        <MovesListsByType moves={pokemon.moves} />
        <PokedexEntries entries={pokemon.pokedexEntries} />
      </div>
    </div>
  );
}
