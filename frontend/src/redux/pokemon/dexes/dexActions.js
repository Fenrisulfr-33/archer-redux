import * as pokemonApi from '../../../pages/api/pokemonApi';
import { beginApiCall, apiCallError } from "../../apiStatus/apiStatusActions";

export const LOAD_NATIONAL_SUCCESS = 'LOAD_NATIONAL_SUCCESS';
export const LOAD_SCVI_SUCCESS = 'LOAD_SCVI_SUCCESS';
export const LOAD_SWSH_SUCCESS = 'LOAD_SWSH_SUCCESS';
export const LOAD_IOA_SUCCESS = 'LOAD_IOA_SUCCESS';
export const LOAD_CT_SUCCESS = 'LOAD_CT_SUCCESS';

export const loadNationalSuccess = (dex) => {
    return { type: LOAD_NATIONAL_SUCCESS, dex };
}
export const loadScViSuccess = (dex) => {
    return { type: LOAD_SCVI_SUCCESS, dex };
}
export const loadSwShSuccess = (dex) => {
    return { type: LOAD_SWSH_SUCCESS, dex };
}
export const loadIoaSuccess = (dex) => {
    return { type: LOAD_IOA_SUCCESS, dex };
}
export const loadCtSuccess = (dex) => {
    return { type: LOAD_CT_SUCCESS, dex };
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

export const loadScViDex = (url) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getGameDex(url)
        .then(dex => {
            dispatch(loadScViSuccess(dex));
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

export const loadIoaDex = (url) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getGameDex(url)
        .then(dex => {
            dispatch(loadIoaSuccess(dex));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}

export const loadCtDex = (url) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getGameDex(url)
        .then(dex => {
            dispatch(loadCtDex(dex));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}