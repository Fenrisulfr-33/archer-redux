export const LOAD_NATIONAL_DEX_SUCCESS = 'LOAD_NATIONAL_DEX_SUCCESS';

import * as pokemonApi from '../../pages/api/pokemonApi';
import { beginApiCall, apiCallError } from "../apiStatus/apiStatusActions";

export const loadNationalDexSuccess = (national) => {
    return { type: LOAD_NATIONAL_DEX_SUCCESS, national };
}

export const loadNationalDex = () => {
    return function(dispatch){
        dispatch(beginApiCall());
        return pokemonApi.getNationalDex()
            .then(national => {
                dispatch(loadNationalDexSuccess(national));
            }).catch(error => {
                dispatch(apiCallError(error));
            });
    };
}