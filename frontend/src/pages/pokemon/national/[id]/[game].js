import { useEffect } from "react";
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { loadPokemonByGame } from "../../../../redux/pokemon/pokemon/pokemonActions";
import { bindActionCreators } from 'redux';
import Loading from "../../../../components/Loading";
import PokemonPage from "../../../../components/pokemon/components/pokemonPage/PokemonPage";
import PokemonLayout from "../../PokemonLayout";

const NationalInd = ({ pokemon, loading, loadPokemonByGame }) => {
    const { query: { id, game }, isReady } = useRouter();

    useEffect(() => {
        if(isReady && pokemon._id !== Number(id)){
            loadPokemonByGame(`${id}`, `${game}`)
        }
    }, [isReady, id, game]);

    return (
        <PokemonLayout>
            {loading ? <Loading /> : <PokemonPage pokemon={pokemon} game={game} goBackRoute={`/pokemon/${game}/pokedex`} />}
        </PokemonLayout>
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
        loadPokemonByGame: bindActionCreators(loadPokemonByGame, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(NationalInd);