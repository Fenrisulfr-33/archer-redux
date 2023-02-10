import * as types from './dexActions';
import initialState from '../../initialState';

export default function dexReducer(state = initialState.dexes, action) {
    switch (action.type) {
        case types.LOAD_NATIONAL_SUCCESS:
            return {
                ...state,
                national: action.dex
            }
        case types.LOAD_SWSH_SUCCESS:
            return {
                ...state,
                sword_shield: action.dex
            }
        case types.LOAD_IOA_SUCCESS:
            return {
                ...state,
                isle_of_armor: action.dex
            }
        default:
            return state;
    }
}