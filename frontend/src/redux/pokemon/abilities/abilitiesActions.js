import * as pokemonApi from '../../../pages/api/pokemonApi';
import { beginApiCall, apiCallError } from "../../apiStatus/apiStatusActions";

export const LOAD_ABILITIES_SUCCESS = 'LOAD_ABILITIES_SUCCESS';
export const LOAD_ABILITY_SUCCESS = 'LOAD_ABILITY_SUCCESS'

export const loadAbilitiesSuccess = (abilities) => {
    return { type: LOAD_ABILITIES_SUCCESS, abilities };
}
export const loadAbilitySuccess = (ability) => {
    return { type: LOAD_ABILITY_SUCCESS, ability };
}
export const loadAbilities = () => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getAbilities()
        .then(abilities => {
            dispatch(loadAbilitiesSuccess(abilities));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}

export const loadAbility = (id) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getAbility(id)
        .then(ability => {
            dispatch(loadAbilitySuccess(ability));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}