import * as types from './pokemonActions';

const initialState = {
    nationalDexList: [],
    pokemon: {},
}

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_POKEMON:
            return {
                ...state,
                pokemon: action.pokemon,
            };
        case types.LOAD_NATIONAL_DEX_SUCCESS:
            const { nationalDex } = action;
            return {
                ...state,
                nationalDex,
            };
        case types.LOAD_POKEMON_SUCCESS:
            const { pokemon } = action;
            return {
                ...state,
                pokemon,
            };
        default:
            return state;
    }
}