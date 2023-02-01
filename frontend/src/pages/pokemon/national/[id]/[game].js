// import MovesListsByType from "./moves/MoveListByType";
import Image from "next/image";
import { useEffect } from "react";
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
        <h4 className='font-extrabold bg-gray-800 rounded-md text-purple-600 px-1 mb-1'>{title}:</h4>
        <p>{info}</p>
    </div>
);

const NationalInd = ({ 
    pokemon: { 
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
    }, 
    loading, 
    loadPokemon 
}) => {
    const router = useRouter(),
    { query, isReady, pathname } = router,
    handleGoBack = (event) => {
        // TODO: would like the option to go back to the dex page that it came from, national or sword-shield
        event.preventDefault;
        router.push('/pokemon/national');
    }

    useEffect(() => {
        try {
            isReady ? loadPokemon(`${query.id}`, `${query.game}`) : null;
        } catch (error) {
            setError({error: true, errorMessage: error});
        }
    }, [isReady, query.id, query.game]);

    return (
        <>
            {loading ? <Loading /> :
            <div className='grid grid-cols-1 tablet:grid-cols-2 w-11/12 m-auto py-5 font-mono text-center text-gray-400'>  
                <button className={''} onClick={handleGoBack}>Go Back</button>      
                <PokemonIndToolbar 
                    id={_id} 
                    game={query.game}
                    gameDropDown={gameDropDown}
                />
                <div className={'col-span-1 tablet:col-span-2'}>
                    <h1 className='col-span-1 tablet:col-span-2 text-5xl text-center py-5 text-purple-200'>{name?.english}</h1>
                    <div className='col-span-1 tablet:col-span-2 grid grid-col-1 tablet:grid-col-2 bg-gray-600 rounded-2xl p-2'>
                        <h1 className='col-span-1 tablet:col-span-2 text-2xl font-extrabold'>Pokedex Information</h1>
                        <div className='col-span-1 p-2'>
                            <div className='col-span-1'>
                                <Image
                                    src={`/hires/${_id}.png`}
                                    alt={`${name?.english}`}
                                    height={100}
                                    width={100}
                                    layout='intrinsic'
                                    className='col-span-1 tablet:col-span-2'
                                />
                            </div>
                            <div className='col-span-1 flex flex-col '>
                                <InfoRow title={'National Dex'} info={_id} />
                                <InfoRow title={'Species'} info={species} />
                                <InfoRow title={'height'} info={info?.height} />
                                <InfoRow title={'Weight'} info={info?.weight} />
                                <InfoRow title={'Egg Groups'} info={eggGroups?.[1] ? `${eggGroups?.[0]}, ${eggGroups?.[1]}` : `${eggGroups?.[0]}`} />
                                <InfoRow title={'Gender Ratio'} info={gender?.genderless ? 'Genderless' : <><span className="text-blue-400">M: ${gender?.male}</span><span className="text-pink-400"> F: ${gender?.female}</span></>} />
                            </div>
                        </div>
                        <div className='col-span-1 p-2'>
                            <div className='flex flex-row justify-between'>
                                <h4 className={'font-extrabold bg-gray-800 rounded-md text-purple-600 px-1 mb-1'}>Pokemon Type:</h4>
                                <span>
                                    <Image
                                        src={`/types/${type?.['0']}.svg`}
                                        alt={`${type?.['0']}`}
                                        height={40}
                                        width={40}
                                    />
                                    {type?.['1'] &&
                                        <Image
                                            src={`/types/${type?.['1']}.svg`}
                                            alt={`${type?.['1']}`}
                                            height={40}
                                            width={40}
                                        />}
                                </span>
                            </div>
                            {abilities?.['1'] ? <InfoRow title={'Ability 1'} info={abilities?.['1']} /> : null}
                            {abilities?.['2'] ? <InfoRow title={'Ability 2'} info={abilities?.['2']} /> : null}
                            {abilities?.h ? <InfoRow title={'Hidden'} info={abilities?.h} /> : null}
                            <h4>Base Stats:</h4>
                            <BaseStat title={'hp'} stat={baseStats?.hp} />
                            <BaseStat title={'atk'} stat={baseStats?.atk} />
                            <BaseStat title={'def'} stat={baseStats?.def} />
                            <BaseStat title={'spatk'} stat={baseStats?.spatk} />
                            <BaseStat title={'spdef'} stat={baseStats?.spdef} />
                            <BaseStat title={'spd'} stat={baseStats?.spd} />
                        </div>
                    </div>
                    <TypeWeakness
                        typeOne={type?.[0]}
                        typeTwo={type?.[1]}
                    />
                    <MovesListsByType moves={moves} />
                    <PokedexEntries entries={pokedexEntries} />
                </div>
            </div >}
        </>
    )
}

const mapStateToProps = (state) => {
    const { pokemon, apiCallsInProgress } = state;
    return {
        pokemon,
        loading: apiCallsInProgress > 0,
    }
}, mapDispatchToProps = (dispatch) => {
    return {
        loadPokemon: bindActionCreators(loadPokemon, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(NationalInd);