import * as types from './dexActions';
import initialState from '../initialState';

export default function dexReducer(state = initialState.dex, action) {
    switch (action.type) {
        case types.LOAD_DEX_SUCCESS:
            return action.dex;
        case types.CLEAR_DEX_DATA:
            return [];
        default:
            return state;
    }
}