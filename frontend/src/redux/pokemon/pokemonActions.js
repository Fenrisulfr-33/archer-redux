export const CREATE_POKEMON = 'CREATE_POKEMON';
export const LOAD_NATIONAL_DEX_SUCCESS = 'LOAD_NATIONAL_DEX';
export const LOAD_POKEMON_SUCCESS = 'LOAD_POKEMON_SUCCESS';

import * as pokemonApi from '../../pages/api/pokemonApi';

export const createPokemon = (pokemon) => {
    return (dispatch) => {
        dispatch({
            type: CREATE_POKEMON,
            pokemon,
        });
    };
};

export const loadNationalDexSuccess = (nationalDex) => {
    return { type: LOAD_NATIONAL_DEX_SUCCESS, nationalDex };
}

export const loadNationalDex = () => {
    return (dispatch) => {
        return pokemonApi.getNationalDex().then(nationalDex => {
            dispatch(loadNationalDexSuccess(nationalDex));
        }).catch(error => console.log(error));

    };
}

export const loadPokemonSuccess = (pokemon) => {
    return { type: LOAD_POKEMON_SUCCESS, pokemon };
}

export const loadPokemon = (id, game) => {
    return (dispatch) => {
        return pokemonApi.getPokemon(id, game).then(pokemon => {
            dispatch(loadPokemonSuccess(pokemon));
        }).catch(error => console.log(error));

    };
}