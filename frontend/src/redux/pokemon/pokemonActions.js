export const LOAD_POKEMON_SUCCESS = 'LOAD_POKEMON_SUCCESS';

import * as pokemonApi from '../../pages/api/pokemonApi';
import { beginApiCall, apiCallError } from "../apiStatus/apiStatusActions";

export const loadPokemonSuccess = (pokemon) => {
    return { type: LOAD_POKEMON_SUCCESS, pokemon };
}

export const loadPokemon = (id, game) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getPokemon(id, game).then(pokemon => {
            dispatch(loadPokemonSuccess(pokemon));
        }).catch(error => {
            dispatch(apiCallError(error));
            console.log(error);
        });

    };
}