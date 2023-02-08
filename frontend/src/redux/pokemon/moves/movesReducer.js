import * as types from './movesActions';
import initialState from '../../initialState';

export default function dexReducer(state = initialState.moves, action) {
    switch (action.type) {
        case types.LOAD_MOVES_SUCCESS:
            return action.moves;
        default:
            return state;
    }
}