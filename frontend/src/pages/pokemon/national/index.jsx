import SideMenu from "../../../components/Menu/SideMenu";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { colors } from "../variables/typeColors";
/* REDUX IMPORTS */
import { connect } from "react-redux";
import * as pokemonActions from "../../../redux/pokemon/pokemonActions";
import { bindActionCreators } from "redux";

import { useRouter } from "next/router";
/* STYLES */
const styles = {
  th: "py-1 px-1 text-center",
  stat: "py-1 px-1 border-l border-gray-400 text-center text-gray-800 whitespace-nowrap bg-opacity-75",
  type: "col-span-1 my-1 rounded-md px-2 space-x-1 font-bold bg-opacity-75",
  tablet: "tablet:py-2 tablet:px-4",
  laptop: "laptop:py-3 laptop:px-6",
};
/* HELPER COMPONENETS */
const NationalDexRow = ({
  pokemon: {
    _id,
    baseStats: { hp, atk, def, spatk, spdef, spd },
    name,
    type,
    abilities,
  },
}) => {
  const router = useRouter();
  const stats = [hp, atk, def, spatk, spdef, spd];
  const game = "sword-shiled";
  // const clickHandler = (e) => {
  //     console.log('clicked');
  //     router.push(`/pokemon/national/${_id}/sword-shield`);
  // }
  return (
    <tr className="text-center hover:bg-purple-200 hover:text-gray-900 hover:font-bold">
      <td>{_id}</td>
      <td>
        <Link href={`/pokemon/national/${_id}/sword-shield`} passhref>
          <a>{name.english}</a>
        </Link>
      </td>
      <td>
        <Image
          src={`/sprites/${_id}.png`}
          alt={`${name.english}`}
          height={40}
          width={40}
          layout="intrinsic"
          className="col-span-1"
        />
      </td>
      <td>
        <div className="font-bold flex flex-col">
          <div className={`${styles.type} ${colors[type[0].toLowerCase()]}`}>
            {type[0]}
          </div>
          {type[1] ? (
            <div className={`${styles.type} ${colors[type[1].toLowerCase()]}`}>
              {type[1]}
            </div>
          ) : null}
        </div>
      </td>
      <td>
        <div className="flex flex-col">
          <div className="">{abilities[1]}</div>
          <div className="">{abilities[2]}</div>
          <div className="italic">{abilities["h"]}</div>
        </div>
      </td>
      {stats.map((stat) => (
        <td className={styles.stat}>{stat}</td>
      ))}
    </tr>
  );
};
/* MAIN COMPONENT */
const NationalDex = ({ national = [], loadNationalDex }) => {
  const headers = [
      "Nat. Dex",
      "Pokemon",
      "Sprite",
      "Type",
      "Abilities",
      "HP",
      "Atk",
      "Def",
      "SpAtk",
      "SpDef",
      "Spd",
    ],
    initalSearchParams = {
      name: "",
      typeOne: "",
      typeTwo: "",
    },
    [searchParams, setSearchParams] = useState({ ...initalSearchParams }),
    [error, setError] = useState(null),
    onChangeHandler = ({ target: { name, value } }) =>
      setSearchParams({ ...searchParams, [name]: value }),
    onResetHandler = () => setSearchParams({ ...initalSearchParams });
  useEffect(() => {
    if (national.length === 0) {
      try {
        console.log(national[0])
        loadNationalDex();
        console.log(national[0])
      } catch (error) {
        setError(error);
      }
    }
  }, []);

  return (
    <div className="flex">
      <div id="side-menu" className="tablet:h-screen w-1/5">
        <SideMenu />
      </div>
      <div id="pokemon-content" className="w-4/5 flex flex-col">
        <div className="flex justify-between m-1">
          <h1>Toolbar</h1>
          <input
            placeholder="Pokemon Name"
            className="rounded-md"
            name={"name"}
            value={searchParams.name}
            onChange={onChangeHandler}
          />
          <input
            placeholder="Type 1"
            className="rounded-md min-w-fit"
            name={"typeOne"}
            value={searchParams.typeOne}
            onChange={onChangeHandler}
          />
          <input
            placeholder="Type 2"
            className="rounded-md min-w-fit"
            name={"typeTwo"}
            value={searchParams.typeTwo}
            onChange={onChangeHandler}
          />
          <button onClick={onResetHandler}>Reset</button>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className=" min-w-full font-mono bg-gray-300 text-xs laptop:text-sm">
                <thead>
                  <tr className="bg-gray-500 text-gray-300 uppercase  leading-normal rounded-t-lg">
                    {headers.map((header) => (
                      <th className={styles.th}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-600  font-light">
                  {national
                    .filter((pokemon) =>
                      searchParams.name === ''
                        ? pokemon
                        : pokemon.name.english
                            .toLowerCase()
                            .includes(searchParams.name.toLowerCase())
                        ? pokemon
                        : null
                    )
                    .filter((pokemon) =>
                      searchParams.typeOne === ""
                        ? pokemon
                        : pokemon.type[0]
                            .toLowerCase()
                            .includes(searchParams.typeOne.toLowerCase())
                        ? pokemon
                        : null
                    )
                    .filter((pokemon) =>
                      searchParams.typeTwo === ""
                        ? pokemon
                        : pokemon.type[1] &&
                          pokemon.type[1]
                            .toLowerCase()
                            .includes(searchParams.typeTwo.toLowerCase())
                        ? pokemon
                        : null
                    )
                    .map((pokemon) => (
                      <NationalDexRow key={pokemon._id} pokemon={pokemon} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    const { pokemon } = state;
    return {
      national: pokemon.nationalDex,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      loadNationalDex: bindActionCreators(
        pokemonActions.loadNationalDex,
        dispatch
      ),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(NationalDex);
