import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import BaseStats from "./BaseStats";
import TypeWeakness from "./TypeWeakness";
import PokedexEntries from "./PokedexEntries";
import MovesListsByType from "./MovesListsByType";
import PokemonIndToolbar from "./PokemonIndToolbar";
import Link from "next/link";
import { InputBox } from "../inputBoxes/InputBox";
import FormsTabs from "./FormTabs";

const InfoRow = ({ title, info, ability }) => (
  <div className="flex flex-row p-1">
    <div className={`w-1/2 font-bold ${ability ? "italic" : null}`}>
      {title}
    </div>
    {ability ? (
      <Link href={`/pokemon/abilities/${info.id}`} passHref>
        {info.name}
      </Link>
    ) : (
      <div className={"w-1/2"}>{info}</div>
    )}
  </div>
);

const getEvString = (evs) => {
  const evsArray = [];
  evs.hp ? evsArray.push(`HP ${evs.hp}`) : null;
  evs.atk ? evsArray.push(`Atk ${evs.atk}`) : null;
  evs.def ? evsArray.push(`HP ${evs.def}`) : null;
  evs.spatk ? evsArray.push(`HP ${evs.spatk}`) : null;
  evs.spdef ? evsArray.push(`HP ${evs.spdef}`) : null;
  evs.spd ? evsArray.push(`HP ${evs.spd}`) : null;
  const evString = evsArray.join("/");
  return evString;
};

export default function PokemonInfoSection({ pokemon }) {
  console.log(pokemon.abilities);
  console.log(pokemon.abilities.two !== undefined);
  return (
    <div className="col-flex space-y-2 bg-gray-600 rounded border-2 border-purple-100 text-left">
      <div className={" bg-gradient-to-r from-purple-100 to-purple-600 w-full"}>
        <div className={"text-center text-2xl font-extrabold w-[30%]"}>
          Pokedex Information:
        </div>
      </div>
      <div className={"flex justify-center bg-gray-800 mx-1 rounded-md"}>
        <Image
          src={`/hires/${pokemon._id}.png`}
          alt={`${pokemon.name.english}`}
          height={400}
          width={400}
        />
      </div>
      <div
        className={"flex flex-col phone:flex-row bg-gray-800 m-1 rounded-md"}
      >
        <div className="bg-gray-600 m-2 w-1/2 flex flex-col rounded-md">
          <InfoRow title={"National Dex."} info={pokemon._id} />
          <InfoRow title={"Species"} info={pokemon.species} />
          <InfoRow title={"Height"} info={pokemon.info.height} />
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
          <div className="p-1">
            <div className="text-lg font-bold text-gray-900">Abilities</div>
            <hr className=" m-0" />
          </div>
          {pokemon.abilities.one && (
            <InfoRow
              title={"Ability 1"}
              info={pokemon.abilities.one}
              ability={true}
            />
          )}
          {pokemon.abilities.two && (
            <InfoRow
              title={"Ability 2"}
              info={pokemon.abilities.two}
              ability={true}
            />
          )}
          {pokemon.abilities.hidden && (
            <InfoRow
              title={"Hidden"}
              info={pokemon.abilities.hidden}
              ability={true}
            />
          )}
        </div>
        <div className="bg-gray-600 m-2 w-1/2 max-h-fit flex flex-col rounded-md">
          <div className="flex flex-row p-1">
            <div className={"flex w-1/2  font-bold items-center"}>
              Pokemon Type
            </div>
            <div className={"w-1/2"}>
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
          </div>
          <InfoRow title={"Catch Rate"} info={pokemon.catchRate} />
          <InfoRow title={"Base Friendship"} info={pokemon.baseFriendship} />
          <InfoRow title={"Base Exp"} info={pokemon.baseExp} />
          <InfoRow title={"Growth Rate"} info={pokemon.growthRate} />
          <InfoRow title={"Egg Cycles"} info={pokemon.eggCycles} />
          <InfoRow title={"Evs"} info={getEvString(pokemon.evs)} />
        </div>
      </div>
    </div>
  );
}
