import SideMenu from '../../../components/Menu/SideMenu';
import Image from "next/image";
import { useState, useSyncExternalStore } from 'react';
import { colors } from '../variables/typeColors';

// const API_BASE_URL = process.env.BACKEND_URL;
const API_BASE_URL = 'http://localhost:5000';

const styles = {
    th: 'py-1 px-1 text-center',
    stat: 'py-1 px-1 border-l border-gray-400 text-center text-gray-800 whitespace-nowrap bg-opacity-75',
    type: 'col-span-1 my-1 rounded-md px-2 space-x-1 font-bold bg-opacity-75',
    tablet: 'tablet:py-2 tablet:px-4',
    laptop: 'laptop:py-3 laptop:px-6',
}

const NationalDexRow = ({ pokemon: { _id, baseStats: { hp, atk, def, spatk, spdef, spd }, name, type, abilities } }) => {
    const stats = [hp, atk, def, spatk, spdef, spd];
    return (
        <tr className="text-center hover:bg-purple-200">
            <td>{_id}</td>
            <td><a href={`/pokemon/national/${_id}`} className="hover:text-purple-500">{name.english}</a></td>
            <td>
                <Image
                    src={`/sprites/${_id}.png`}
                    alt={`${name.english}`}
                    height={40}
                    width={40}
                    layout='intrinsic'
                    className='col-span-1'
                />
            </td>
            <td>
                <div className="font-bold flex flex-col">
                    <div className={`${styles.type} ${colors[type[0].toLowerCase()]}`}>{type[0]}</div>
                    {type[1] ? (<div className={`${styles.type} ${colors[type[1].toLowerCase()]}`}>{type[1]}</div>) : null}
                </div>
            </td>
            <td >
                <div className='flex flex-col'>
                    <div className="">{abilities[1]}</div>
                    <div className="">{abilities[2]}</div>
                    <div className="italic">{abilities['h']}</div>
                </div>
            </td>
            {stats.map((stat) => (<td className={styles.stat}>{stat}</td>))}
        </tr>
    )
}


export default function NationalDex({ national }) {
    const headers = ['Nat. Dex', 'Pokemon', 'Sprite', 'Type', 'Abilities', 'HP', 'Atk', 'Def', 'SpAtk', 'SpDef', 'Spd'],
    initalSearchParams = {
        name: '',
        typeOne: '',
        typeTwo: '',
    },
    [searchParams, setSearchParams] = useState({...initalSearchParams}),
    onChangeHandler = ({ target: {name, value}}) => setSearchParams({...searchParams, [name]: value }),
    onResetHandler = () => setSearchParams({...initalSearchParams})

    return (
        <div className='flex'>
            <div id='side-menu' className='tablet:h-screen w-1/5'>
                <SideMenu />
            </div>
            <div id='pokemon-content' className='w-4/5 flex flex-col'>
                <div className='flex justify-between m-1'>
                    <h1>Toolbar</h1>
                    <input
                        placeholder='Pokemon Name'
                        className='rounded-md'
                        name={'name'}
                        value={searchParams.name}
                        onChange={onChangeHandler}
                    />
                    <input
                        placeholder='Type 1'
                        className='rounded-md min-w-fit'
                        name={'typeOne'}
                        value={searchParams.typeOne}
                        onChange={onChangeHandler}
                    />
                    <input
                        placeholder='Type 2'
                        className='rounded-md min-w-fit'
                        name={'typeTwo'}
                        value={searchParams.typeTwo}
                        onChange={onChangeHandler}
                    />
                    <button onClick={onResetHandler}>Reset</button>
                </div>
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table className=" min-w-full font-mono bg-gray-300 text-xs laptop:text-sm">
                                <thead>
                                    <tr className="bg-gray-500 text-gray-300 uppercase  leading-normal rounded-t-lg">
                                        {headers.map((header) => <th className={styles.th}>{header}</th>)}
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600  font-light">
                                    {
                                        national.filter(pokemon => searchParams.name === '' ? pokemon : pokemon.name.english.toLowerCase().includes(searchParams.name.toLowerCase()) ? pokemon : null)
                                            .filter(pokemon => searchParams.typeOne === '' ? pokemon : (pokemon.type[0].toLowerCase().includes(searchParams.typeOne.toLowerCase()) ? pokemon : null))
                                            .filter(pokemon => searchParams.typeTwo === '' ? pokemon : (pokemon.type[1] && pokemon.type[1].toLowerCase().includes(searchParams.typeTwo.toLowerCase()) ? pokemon : null))
                                            .map((pokemon) => <NationalDexRow key={pokemon._id} pokemon={pokemon} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const response = await fetch(`${API_BASE_URL}/pokemon/national`);
    const national = await response.json();
    return { props: { national } }
}