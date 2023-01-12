import { useState } from "react";
import { FilterBar } from './FilterBar';
import { DexRow } from "./DexRow";
/* STYLES */
const styles = {
  th: "py-1 px-1 text-center",
  tablet: "tablet:py-2 tablet:px-4",
  laptop: "laptop:py-3 laptop:px-6",
};
/* MAIN COMPONENT */
export const DexList = ({ list, filters = false, national = false, game }) => {
    const initalSearchParams = {
      name: '',
      typeOne: '',
      typeTwo: '',
      ability: '',
    }, [searchParams, setSearchParams] = useState({ ...initalSearchParams }),
    searchParamsList = [
        {title: 'Pokemon', name: 'name', value: searchParams.name, width: 'w-24'},
        {title: 'Type 1', name: 'typeOne', value: searchParams.typeOne, width: 'w-14'},
        {title: 'Type 2', name: 'typeTwo', value: searchParams.typeTwo, width: 'w-14'},
        {title: 'Ability', name: 'ability', value: searchParams.ability, width: 'w-24'}
    ], headers = national ? [
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
      ] : [
        "Pokedex",
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
    onChangeHandler = ({ target: { name, value } }) =>
      setSearchParams({ ...searchParams, [name]: value.toLowerCase() }),
    onResetHandler = () => setSearchParams({ ...initalSearchParams });

  return (
    <div id="pokemon-content" className="flex flex-col">
        {filters ? <FilterBar onResetHandler={onResetHandler} searchParams={searchParamsList} onChangeHandler={onChangeHandler} /> : null}
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full font-mono bg-gray-300 text-xs laptop:text-sm">
                    <thead>
                        <tr className="bg-gray-500 text-gray-300 uppercase  leading-normal rounded-t-lg">
                            {headers.map((header, index) => (<th key={index} className={styles.th}>{header}</th>))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-light">
                        {filters ? 
                                list.filter((pokemon) => searchParams.name === '' ? pokemon : pokemon.name?.english.toLowerCase().includes(searchParams.name) ? pokemon : null)
                                .filter((pokemon) => searchParams.typeOne === '' ? pokemon : pokemon.type[0].toLowerCase().includes(searchParams.typeOne) ? pokemon : null)
                                .filter((pokemon) => searchParams.typeTwo === '' ? pokemon : pokemon.type[1] && pokemon.type[1].toLowerCase().includes(searchParams.typeTwo) ? pokemon : null)
                                .filter((pokemon) => searchParams.ability === '' ? pokemon : (pokemon.abilities[1] && pokemon.abilities[1].toLowerCase().includes(searchParams.ability)) || (pokemon.abilities[2] && pokemon.abilities[2].toLowerCase().includes(searchParams.ability)) || (pokemon.abilities.h && pokemon.abilities.h.toLowerCase().includes(searchParams.ability)) ? pokemon : null)
                                .map((pokemon) => (<DexRow key={pokemon._id} pokemon={pokemon} dexNumber={national ? pokemon._id : pokemon.pokedexNumber[`${game}`]}/>)) 
                        :
                        list.map((pokemon) => (
                            <DexRow key={pokemon._id} pokemon={pokemon} dexNumber={national ? pokemon._id : pokemon.pokedexNumber[`${game}`]}/>
                        ))}
                    </tbody>
                   </table>
                </div>
            </div>
        </div>
    </div>
)};