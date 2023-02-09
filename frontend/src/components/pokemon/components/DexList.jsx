import { useState } from "react";
import { DexRow } from "./DexRow";
import Pagination from "../../pagination/Pagination";
import ToolBar from "./toolbars/Toolbar";
/* STYLES */
const styles = {
  th: "py-1 px-1 text-center",
  tablet: "tablet:py-2 tablet:px-4",
  laptop: "laptop:py-3 laptop:px-6",
};
/* MAIN COMPONENT */
export const DexList = ({ list = [], filters = false, national = false, game }) => {
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
        "Total",
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
        "Total",
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

    // Pagination
    const [recordsPerPage, setRcordsPerPage] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="pokemon-content" className="flex flex-col space-y-2 pb-4">
        <ToolBar 
          onResetHandler={onResetHandler} 
          searchParams={searchParamsList} 
          onChangeHandler={onChangeHandler}
          recordsPerPage={recordsPerPage} 
          currentPage={currentPage}
          totalCount={list.length} 
          paginate={paginate}
        />
        <div className='rounded-lg border-2 border-purp-100 overflow-x-auto scrollbar-hide sm:-mx-6 lg:-mx-8'>
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full font-mono bg-gray-300 text-xs laptop:text-sm">
                    <thead>
                        <tr className="bg-gray-600 text-gray-300 uppercase leading-normal">
                            {headers.map((header, index) => (<th key={index} className={styles.th}>{header}</th>))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-light">
                        {filters ? 
                                currentRecords.filter((pokemon) => searchParams.name === '' ? pokemon : pokemon.name?.english.toLowerCase().includes(searchParams.name) ? pokemon : null)
                                .filter((pokemon) => searchParams.typeOne === '' ? pokemon : pokemon.type.one.toLowerCase().includes(searchParams.typeOne) ? pokemon : null)
                                .filter((pokemon) => searchParams.typeTwo === '' ? pokemon : pokemon.type.two && pokemon.type[1].toLowerCase().includes(searchParams.typeTwo) ? pokemon : null)
                                .filter((pokemon) => searchParams.ability === '' ? pokemon : (pokemon.abilities?.one.toLowerCase().includes(searchParams.ability)) || (pokemon.abilities?.two.toLowerCase().includes(searchParams.ability)) || (pokemon.abilities?.hidden.toLowerCase().includes(searchParams.ability)) ? pokemon : null)
                                .map((pokemon) => (<DexRow key={pokemon._id} pokemon={pokemon} dexNumber={national ? pokemon._id : pokemon.pokedexNumber[`${game}`]}/>)) 
                        :
                        currentRecords.map((pokemon) => (
                            // <DexRow key={pokemon._id} pokemon={pokemon} dexNumber={national ? pokemon._id : pokemon.pokedexNumber[`${game}`]}/>
                            <DexRow key={pokemon._id} pokemon={pokemon} dexNumber={national ? pokemon._id : '--'}/>
                        ))}
                    </tbody>
                   </table>
                </div>
            </div>
        </div>
        <div className={'flex flex-col space-y-2 p-2 bg-gray-700 m-2 rounded-lg border-2 border-purp-300'}>
          <h2 className={'label'}>Page</h2>
            <Pagination 
                recordsPerPage={recordsPerPage} 
                totalCount={list.length} 
                paginate={paginate} 
                currentPage={currentPage}
            />
        </div>
    </div>
)};