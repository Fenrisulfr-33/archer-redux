import * as pokemonApi from '../../../pages/api/pokemonApi';
import { beginApiCall, apiCallError } from "../../apiStatus/apiStatusActions";

export const LOAD_NATIONAL_SUCCESS = 'LOAD_NATIONAL_SUCCESS';
export const LOAD_DEX_SUCCESS = 'LOAD_DEX_SUCCESS';

export const loadNationalSuccess = (dex) => {
    return { type: LOAD_NATIONAL_SUCCESS, dex };
}
export const loadDexSuccess = (dex) => {
    return { type: LOAD_DEX_SUCCESS, dex };
}

export const loadNationalDex = (query) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getNationalDex(query)
        .then(dex => {
            dispatch(loadNationalSuccess(dex));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}
export const loadDex = (url, query) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getGameDex(url, query)
        .then(dex => {
            dispatch(loadDexSuccess(dex));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}