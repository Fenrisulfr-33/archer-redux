import { useRouter } from "next/router";
import Image from "next/image";
import BaseStats from "./BaseStats";
import TypeWeakness from "./TypeWeakness";
import PokedexEntries from "./PokedexEntries";
import MovesListsByType from "./MovesListsByType";
import PokemonIndToolbar from "./PokemonIndToolbar";

const InfoRow = ({ title, info }) => (
  <div className="flex flex-row justify-between">
    <div className="label border-2 border-gray-900">{title}:</div>
    <p>{info}</p>
  </div>
);
export default function PokemonPage({ pokemon: {
    _id,
    name,
    species,
    info,
    gender,
    eggGroups,
    type,
    pokedexEntries,
    moves,
    baseStats,
    abilities,
    gameDropDown,
}, game,
goBackRoute }){
    const router = useRouter();
    const handleGoBack = (event) => {
        event.preventDefault();
        router.push(goBackRoute);
    }

    return (
        <div
        className={
          "flex flex-col w-11/12 m-auto py-5 font-mono text-center text-white"
        }
      >
        <button className={""} onClick={handleGoBack}>
          Go Back
        </button>
        <PokemonIndToolbar
          id={_id}
          game={game}
          gameDropDown={gameDropDown}
        />
        <div className={"col-flex space-y-2"}>
          <h1 className="text-5xl font-bold text-center py-5 text-purp-200">
            {name?.english}
          </h1>
          <div className="col-flex p-2 space-y-2 bg-gray-600 rounded-2xl border-2 border-purp-100">
            <h1 className="text-2xl font-extrabold">Pokedex Information</h1>
            <div className={'col-flex text-sm tablet:text-md tablet:flex-row '}>
              <div className="col-flex m-1 rounded-lg bg-gray-800 space-y-2 p-2 tablet:w-1/2">
                <div className="flex justify-center">
                  <Image
                    src={`/hires/${_id}.png`}
                    alt={`${name?.english}`}
                    height={100}
                    width={100}
                    className="rounded-md border-2 border-gray-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <InfoRow title={"National Dex"} info={_id} />
                  <InfoRow title={"Species"} info={species} />
                  <InfoRow title={"height"} info={info?.height} />
                  <InfoRow title={"Weight"} info={info?.weight} />
                  <InfoRow
                    title={"Egg Groups"}
                    info={
                      eggGroups?.[1]
                        ? `${eggGroups?.[0]}, ${eggGroups?.[1]}`
                        : `${eggGroups?.[0]}`
                    }
                  />
                  <InfoRow
                    title={"Gender Ratio"}
                    info={
                      gender?.genderless ? (
                        "Genderless"
                      ) : (
                        <>
                          <span className="text-blue-400">
                            M: ${gender?.male}
                          </span>
                          <span className="text-pink-400">
                            {" "}
                            F: ${gender?.female}
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
                      src={`/types/${type?.one}.svg`}
                      alt={`${type?.one}`}
                      height={40}
                      width={40}
                    />
                    {type?.two && (
                      <Image
                        src={`/types/${type?.two}.svg`}
                        alt={`${type?.two}`}
                        height={40}
                        width={40}
                      />
                    )}
                  </span>
                </div>
                {abilities?.one ? (
                  <InfoRow title={"Ability 1"} info={abilities?.one} />
                ) : null}
                {abilities?.two ? (
                  <InfoRow title={"Ability 2"} info={abilities?.two} />
                ) : null}
                {abilities?.hidden ? (
                  <InfoRow title={"Hidden"} info={abilities?.hidden} />
                ) : null}
                <h4>Base Stats:</h4>
                <BaseStats title={"hp"} stat={baseStats?.hp} />
                <BaseStats title={"atk"} stat={baseStats?.atk} />
                <BaseStats title={"def"} stat={baseStats?.def} />
                <BaseStats title={"spatk"} stat={baseStats?.spatk} />
                <BaseStats title={"spdef"} stat={baseStats?.spdef} />
                <BaseStats title={"spd"} stat={baseStats?.spd} />
              </div>
            </div>
          </div>
          <TypeWeakness typeOne={type?.one} typeTwo={type?.two} />
          <MovesListsByType moves={moves} />
          <PokedexEntries entries={pokedexEntries} />
        </div>
      </div>
    )
}