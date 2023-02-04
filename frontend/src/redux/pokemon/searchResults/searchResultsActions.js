import * as pokemonApi from '../../../pages/api/pokemonApi';
import { beginApiCall, apiCallError } from "../../apiStatus/apiStatusActions";

export const LOAD_SEARCH_RESULTS_SUCCESS = 'LOAD_SEARCH_RESULTS_SUCCESS';

export const loadSearchResultsSuccess = (results) => {
    return { type: LOAD_SEARCH_RESULTS_SUCCESS,  results};
}

export const loadSearchResults = (query) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getSearchResults(query)
        .then(results => {
            dispatch(loadSearchResultsSuccess(results));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}