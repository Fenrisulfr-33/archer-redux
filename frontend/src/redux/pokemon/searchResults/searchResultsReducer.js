import * as types from './searchResultsActions';
import initialState from '../../initialState';

export default function dexReducer(state = initialState.searchResults, action) {
    switch (action.type) {
        case types.LOAD_SEARCH_RESULTS_SUCCESS:
            return action.results;
        default:
            return state;
    }
}