// import MovesListsByType from "./moves/MoveListByType";
import Image from "next/image";
import { useState, useEffect } from "react";
// import GameDropDown from "./GameDropDown";
import { useRouter } from 'next/router';
/* REDUX IMPORTS */
import { connect } from 'react-redux';
import { loadPokemon } from "../../../../redux/pokemon/pokemonActions";
import { bindActionCreators } from 'redux';
import { BaseStat } from "../../../../components/pokemon/components/BaseStats";
import { TypeWeakness } from '../../../../components/pokemon/components/TypeWeakness';
import { PokedexEntries } from '../../../../components/pokemon/components/PokedexEntries';
import MovesListsByType from "../../../../components/pokemon/components/MovesListsByType";
import { PokemonIndToolbar } from "../../../../components/pokemon/components/pokemonIndToolbar";
import Loading from "../../../../components/Loading";

const InfoRow = ({ title, info }) => (
    <div className='flex flex-row justify-between'>
        <h4 className='font-bold text-black'>{title}:</h4>
        <p>{info}</p>
    </div>
);

const NationalInd = ({ pokemon, loading, loadPokemon }) => {
    const { query, isReady } = useRouter(),
    [error, setError] = useState(null);
    // Add State to determine what generation this person wants on screen
    // inital request to the server should be the param sword and shield but then can be changed
    useEffect(() => {
        try {
            isReady ? loadPokemon(`${query.id}`, `${query.game}`) : null;
        } catch (error) {
            setError(error);
        }
    }, [isReady, query.id, query.game]);
    console.log(pokemon.gameDropDown)
    return (
        <>
            {loading && <Loading />}
            <div className='grid grid-cols-1 tablet:grid-cols-2 w-11/12 m-auto py-5 font-mono text-center text-gray-400'>        
                <PokemonIndToolbar 
                    id={pokemon._id} 
                    game={query.game}
                    gameDropDown={pokemon.gameDropDown}
                />
                <div className={'col-span-1 tablet:col-span-2'}>
                    <h1 className='col-span-1 tablet:col-span-2 text-5xl text-center py-5 text-purple-200'>{pokemon?.name?.english}</h1>
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
                                    {/* <p>{`M:${pokemon?.genderRatio.split(':')[0]}% F:${pokemon?.genderRatio.split(':')[1]}%`}</p> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 p-2'>
                            <div className='flex flex-row justify-between'>
                                <h4>Pokemon Type:</h4>
                                <span>
                                    <Image
                                        src={`/types/${pokemon?.type?.['0']}.svg`}
                                        alt={`${pokemon?.type?.['0']}`}
                                        height={40}
                                        width={40}
                                    />
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
                            <InfoRow title={'Ability 2'} info={pokemon?.abilities?.['2']} />
                            <InfoRow title={'Hidden'} info={pokemon?.abilities?.h} />
                            <h4>Base Stats:</h4>
                            <BaseStat title={'hp'} stat={pokemon?.baseStats?.hp} />
                            <BaseStat title={'atk'} stat={pokemon?.baseStats?.atk} />
                            <BaseStat title={'def'} stat={pokemon?.baseStats?.def} />
                            <BaseStat title={'spatk'} stat={pokemon?.baseStats?.spatk} />
                            <BaseStat title={'spdef'} stat={pokemon?.baseStats?.spdef} />
                            <BaseStat title={'spd'} stat={pokemon?.baseStats?.spd} />
                        </div>
                    </div>
                    <TypeWeakness
                        typeOne={pokemon?.type?.[0]}
                        typeTwo={pokemon?.type?.[1]}
                    />
                    <MovesListsByType moves={pokemon.moves} />
                    <PokedexEntries entries={pokemon.pokedexEntries} />
                </div>
            </div >
        </>
    )
}

const mapStateToProps = (state) => {
    const { pokemon, apiCallsInProgress } = state;
    return {
        pokemon: pokemon,
        loading: apiCallsInProgress > 0,
    }
},
    mapDispatchToProps = (dispatch) => {
        return {
            loadPokemon: bindActionCreators(loadPokemon, dispatch)
        };
    }
export default connect(mapStateToProps, mapDispatchToProps)(NationalInd);