import * as types from './movesActions';
import initialState from '../../initialState';

export default function dexReducer(state = initialState.moves, action) {
    switch (action.type) {
        case types.LOAD_MOVES_SUCCESS:
            return {
                ...state,
                list: action.moves,
            }
        case types.LOAD_MOVE_SUCCESS:
            return {
                ...state,
                move: action.move,
            }
        default:
            return state;
    }
}