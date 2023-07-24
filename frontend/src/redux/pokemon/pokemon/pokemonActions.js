import * as pokemonApi from '../../../pages/api/pokemonApi';
import { beginApiCall, apiCallError } from "../../apiStatus/apiStatusActions";

export const LOAD_POKEMON_SUCCESS = 'LOAD_POKEMON_SUCCESS';
export const LOAD_POKEMON_MOVES_SUCCESS = 'LOAD_POKEMON_MOVES_SUCCESS';

export const loadPokemonSuccess = (pokemon) => {
    return { type: LOAD_POKEMON_SUCCESS, pokemon };
}
export const loadPokemonMovesSuccess = (moves) => {
    return { type: LOAD_POKEMON_MOVES_SUCCESS, moves };
}

export const loadPokemon = (id) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getPokemon(id)
        .then(pokemon => {
            dispatch(loadPokemonSuccess(pokemon));
        }).catch(error => {
            dispatch(apiCallError(error));
        });

    };
}

export const loadPokemonMovesByGame = (id, game) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getPokemonMoves(id, game)
        .then(moves => {
            dispatch(loadPokemonMovesSuccess(moves));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}

export const loadPokemonByGame = (id, game) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getPokemon(id, game)
        .then(pokemon => {
            dispatch(loadPokemonSuccess(pokemon));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}