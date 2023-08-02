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
    <div className={"w-1/2 text-left font-bold"}>{title}</div>
    {ability ? (
      <Link href={`/pokemon/abilities/${info.id}`} passHref>
        {info.name}
      </Link>
    ) : (
      <div className={"w-1/2 text-left"}>{info}</div>
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
  return (
    <div className="col-flex space-y-2 bg-gray-600 rounded border-2 border-purple-100">
      <div className={" bg-gradient-to-r from-purple-100 to-purple-600 w-full"}>
        <div className={"text-center text-2xl font-extrabold w-[30%]"}>
          Pokedex Information:
        </div>
      </div>
      <div className={"flex justify-center"}>
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

          <div className="text-left w-[90%] border-b">Abilities</div>
          <hr />
          <div className="flex flex-row p-1">
            <div className={"w-1/2 text-left font-bold"}>Ability 1</div>
            <div className={"w-1/2 text-left"}>
              {pokemon.abilities.one.name ? pokemon.abilities.one.name : null}
            </div>
          </div>
          {pokemon?.abilities?.two?.name ? (
            <InfoRow
              title={"Ability 2"}
              info={pokemon.abilities.two.name}
              ability={true}
            />
          ) : null}
          <div className="flex flex-row p-1">
            <div className={"w-1/2 text-left font-bold"}>Hidden</div>
            <div className={"w-1/2 text-left"}>
              {pokemon.abilities.hidden.name
                ? pokemon.abilities.hidden.name
                : null}
            </div>
          </div>
        </div>

        <div className="bg-gray-600 m-2 w-1/2 flex flex-col rounded-md">
          <div className="flex flex-row p-1">
            <div className={"flex w-1/2 text-left font-bold items-center"}>
              Pokemon Type
            </div>
            <div className={"w-1/2 text-left"}>
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

          <div className="flex flex-row p-1">
            <div className={"w-1/2 text-left font-bold"}>Catch Rate</div>
            <div className={"w-1/2 text-left"}>{pokemon.catchRate}</div>
          </div>
          <div className="flex flex-row p-1">
            <div className={"w-1/2 text-left font-bold"}>Base Friendship</div>
            <div className={"w-1/2 text-left"}>{pokemon.baseFriendship}</div>
          </div>
          <div className="flex flex-row p-1">
            <div className={"w-1/2 text-left font-bold"}>Base Exp</div>
            <div className={"w-1/2 text-left"}>{pokemon.baseExp}</div>
          </div>
          <div className="flex flex-row p-1">
            <div className={"w-1/2 text-left font-bold"}>Growth Rate</div>
            <div className={"w-1/2 text-left"}>{pokemon.growthRate}</div>
          </div>
          <div className="flex flex-row p-1">
            <div className={"w-1/2 text-left font-bold"}>Egg Cycles</div>
            <div className={"w-1/2 text-left"}>{pokemon.eggCycles}</div>
          </div>
          <div className="flex flex-row p-1">
            <div className={"w-1/2 text-left font-bold"}>Evs</div>
            <div className={"w-1/2 text-left"}>{getEvString(pokemon.evs)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
