import * as types from './nationalActions';
import initialState from '../initialState';

export default function nationalReducer(state = initialState.national, action) {
    switch (action.type) {
        case types.LOAD_NATIONAL_DEX_SUCCESS:
            return action.national;
        default:
            return state;
    }
}