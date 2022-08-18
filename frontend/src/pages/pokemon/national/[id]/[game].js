// import MovesListsByType from "./moves/MoveListByType";
import Image from "next/image";
import { useState, useEffect } from "react";
// import GameDropDown from "./GameDropDown";
import { useRouter } from 'next/router';
/* REDUX IMPORTS */
import { connect } from 'react-redux';
import * as pokemonActions from '../../../../redux/pokemon/pokemonActions';
import { bindActionCreators } from 'redux';
/* TESTING */
import MovesListsByType from "../../components/MovesListsByType";
import { BaseStat } from "../../components/baseStats";
import { NavBarIcon } from '../../../../components/Menu/NavBarIcon';
import { SiPokemon } from 'react-icons/si'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { TypeWeakness } from '../../components/TypeWeakness';

const InfoRow = ({ title, info }) => (
    <div className='flex flex-row justify-between'>
        <h4 className='font-bold text-black'>{title}:</h4>
        <p>{info}</p>
    </div>
);

const NationalInd = ({ pokemon = {}, loadPokemon }) => {
    const { query, isReady } = useRouter();
    // Add State to determine what generation this person wants on screen
    // inital request to the server should be the param sword and shield but then can be changed
    useEffect(() => {
            try {
                isReady ? loadPokemon(`${query.id}`, `${query.game}`) : null;
            } catch (error) {
                setError(error);
            }
    }, [isReady, query.id, query.game]);

    if (!pokemon) {
        return null
    } else {
        return (
            <div className='grid grid-cols-1 tablet:grid-cols-2 w-11/12  m-auto font-mono text-center text-gray-400'>
                <div id='toobar' className='col-span-1 tablet:col-span-2 flex flex-row justify-between pt-2'>
                    {pokemon?._id - 1 > 0 ? <NavBarIcon icon={<BsFillArrowLeftSquareFill size='20' />} text={pokemon._id - 1} route={`/pokemon/national/${pokemon._id - 1}/sword-shield`} /> : <SiPokemon size='50' />}
                    {pokemon?._id + 1 <= 898 ? <NavBarIcon icon={<BsFillArrowRightSquareFill size='20' />} text={pokemon._id + 1} route={`/pokemon/national/${pokemon._id + 1}/sword-shield`} /> : <SiPokemon size='50' />}
                </div>
                <h1 className='col-span-1 tablet:col-span-2 text-5xl text-center py-5 text-purple-200'>{pokemon?.name?.english}</h1>
                {/* < h1 > {query.game}</h1> */}
                {/* <GameDropDown /> */}

                <div className='col-span-1 tablet:col-span-2 grid grid-col-1 tablet:grid-col-2 bg-gray-600 rounded-2xl p-2'>
                    <h1 className='col-span-1 tablet:col-span-2 text-2xl font-extrabold'>Pokedex Information</h1>
                    <div className='col-span-1 p-2'>
                        <div className='col-span-1'>
                            <Image
                                src={`/hires/${pokemon?._id}.png`}
                                alt={`${pokemon?.name}`}
                                height={100}
                                width={100}
                                layout='intrinsic'
                                className='col-span-1 tablet:col-span-2'
                            />
                        </div>
                        <div className='col-span-1 flex flex-col '>
                            <InfoRow title={'National Dex'} info={pokemon?._id} />
                            <InfoRow title={'Species'} info={pokemon?.species} />
                            <InfoRow title={'height'} info={pokemon?.height} />
                            <InfoRow title={'Weight'} info={pokemon?.weight} />
                            <div className='flex flex-row justify-between'>
                                <h4 className='font-bold text-black'>{`Egg Groups:`}</h4>
                                <p>{`${pokemon?.eggGroups?.[0]}, ${pokemon?.eggGroups?.[1]}`}</p>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <h4 className='font-bold text-black'>{`Gender Ratio:`}</h4>
                                {pokemon?.genderRatio && <p>{`M:${pokemon?.genderRatio.split(':')[0]}% F:${pokemon?.genderRatio.split(':')[1]}%`}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 p-2'>
                        <div className='flex flex-row justify-between'>
                            <h4>Pokemon Type:</h4>
                            <span>
                                {pokemon?.type?.['0'] &&
                                    <Image
                                        src={`/types/${pokemon?.type?.['0']}.svg`}
                                        alt={`${pokemon?.type?.['0']}`}
                                        height={40}
                                        width={40}
                                    />}
                                {pokemon?.type?.['1'] &&
                                    <Image
                                        src={`/types/${pokemon?.type?.['1']}.svg`}
                                        alt={`${pokemon?.type?.['1']}`}
                                        height={40}
                                        width={40}
                                    />}
                            </span>
                        </div>
                        <InfoRow title={'Ability 1'} info={pokemon?.abilities?.['1']} />
                        {pokemon?.abilities?.['2'] && <InfoRow title={'Ability 2'} info={pokemon?.abilities?.['2']} />}
                        {pokemon?.abilities?.h && <InfoRow title={'Hidden'} info={pokemon?.abilities?.h} />}
                        <h4>Base Stats:</h4>
                        <BaseStat title={'hp'} stat={pokemon?.baseStats?.hp} />
                        <BaseStat title={'atk'} stat={pokemon?.baseStats?.atk} />
                        <BaseStat title={'def'} stat={pokemon?.baseStats?.def} />
                        <BaseStat title={'spatk'} stat={pokemon?.baseStats?.spatk} />
                        <BaseStat title={'spdef'} stat={pokemon?.baseStats?.spdef} />
                        <BaseStat title={'spd'} stat={pokemon?.baseStats?.spd} />
                    </div>
                </div>
                <div className='bg-gray-600'>
                    {pokemon?.type && <TypeWeakness
                        typeOne={pokemon?.type?.['0']}
                        typeTwo={pokemon?.type?.['1']}
                    />}
                </div>
                {isReady && <MovesListsByType moves={pokemon.moves} />}
            </div >
        )
    }
}

// export const getServerSideProps = async (context) => {
//     console.log(context);
//     const response = await fetch(`${API_BASE_URL}/pokemon/national/${context.params.id}`);
//     const pokemon = await response.json();
//     return { props: { pokemon } }
// }

const mapStateToProps = (state) => {
    const { pokemon } = state;
    return {
        pokemon: pokemon.pokemon,
    }
},
    mapDispatchToProps = (dispatch) => {
        return {
            loadPokemon: bindActionCreators(pokemonActions.loadPokemon, dispatch)
        };
    }
export default connect(mapStateToProps, mapDispatchToProps)(NationalInd);