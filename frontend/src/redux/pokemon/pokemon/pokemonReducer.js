import * as types from './pokemonActions';
import initialState from '../../initialState';

export default function pokemonReducer(state = initialState.pokemon, action) {
    switch (action.type) {
        case types.LOAD_POKEMON_SUCCESS:
            return action.pokemon;
        case types.LOAD_POKEMON_MOVES_SUCCESS:
            return {
                ...state.pokemon,
                moves: action.moves,
            }
        default:
            return state;
    }
}