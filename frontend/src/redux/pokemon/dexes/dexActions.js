import * as pokemonApi from '../../../pages/api/pokemonApi';
import { beginApiCall, apiCallError } from "../../apiStatus/apiStatusActions";

export const LOAD_NATIONAL_SUCCESS = 'LOAD_NATIONAL_SUCCESS';
export const LOAD_SWSH_SUCCESS = 'LOAD_SWSH_SUCCESS';

export const loadNationalSuccess = (dex) => {
    return { type: LOAD_NATIONAL_SUCCESS, dex };
}

export const loadSwShSuccess = (dex) => {
    return { type: LOAD_SWSH_SUCCESS, dex };
}

export const loadNationalDex = () => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getNationalDex()
        .then(dex => {
            dispatch(loadNationalSuccess(dex));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}

export const loadSwShDex = (url) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getGameDex(url)
        .then(dex => {
            dispatch(loadSwShSuccess(dex));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}