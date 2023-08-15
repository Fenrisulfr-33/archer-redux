
import Image from "next/image";
import Link from "next/link";

export default function PokemonPageInfoSection({ pokemon }) {
  return (
    <div className="col-flex space-y-2 bg-gray-600 rounded border-2 border-purple-100 text-left">
      <div className={"bg-gradient-to-r from-purple-100 to-purple-600 rounded-tr w-full"}>
        <div className={"text-2xl pl-2 font-extrabold break-normal"}>
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
        className={
          "flex flex-col space-y-2 phone:space-y-0 phone:flex-row phone:space-x-2 m-1"
        }
      >
        <div className="bg-gray-800 flex flex-col rounded-md phone:w-1/2 p-1">
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
          <div className="mt-1 p-1 text-lg font-bold bg-gradient-to-r from-purple-100 to-purple-600 rounded-md">
            Abilities
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

        <div className="bg-gray-800 flex flex-col rounded-md phone:w-1/2 p-1">
          <div className="flex flex-row p-1 border-b border-purple-300">
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

const InfoRow = ({ title, info, ability }) => (
  <div className="flex flex-row p-1 border-b border-purple-300">
    <div className={`w-1/2 font-bold`}>{title}</div>
    {ability ? (
      <Link
        href={`/pokemon/abilities/${info.id}`}
        className={`${ability ? "italic" : null}`}
        passHref
      >
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
  evs.def ? evsArray.push(`Def ${evs.def}`) : null;
  evs.spatk ? evsArray.push(`SpAtk ${evs.spatk}`) : null;
  evs.spdef ? evsArray.push(`SpDef ${evs.spdef}`) : null;
  evs.spd ? evsArray.push(`Spd ${evs.spd}`) : null;
  const evString = evsArray.join(" / ");
  return evString;
};