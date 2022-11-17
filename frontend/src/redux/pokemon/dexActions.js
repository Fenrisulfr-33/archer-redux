export const LOAD_DEX_SUCCESS = 'LOAD_DEX_SUCCESS';
export const CLEAR_DEX_DATA = 'CLEAR_DEX_DATA';

import * as pokemonApi from '../../pages/api/pokemonApi';
import { beginApiCall, apiCallError } from "../apiStatus/apiStatusActions";

export const loadDexSuccess = (dex) => {
    return { type: LOAD_DEX_SUCCESS, dex };
}
export const clearDex = () => {
    return { type: CLEAR_DEX_DATA };
}

export const loadDex = (url) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getDex(url)
        .then(dex => {
            dispatch(loadDexSuccess(dex));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}