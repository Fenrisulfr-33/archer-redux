export const ADD_TEAM_SUCCESS = 'ADD_TEAM_SUCCESS';

import * as teamsApi from '../../pages/api/teamsApi';
import { beginApiCall, apiCallError } from "../apiStatus/apiStatusActions";

export const addPokemonTeamSuccess = (newTeam) => {
    return { type: ADD_TEAM_SUCCESS, newTeam };
}

export const addPokemonTeam = (userId) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return teamsApi.addPokemonTeam(userId).then(newTeam => {
            dispatch(addPokemonTeamSuccess(newTeam));
        }).catch(error => {
            dispatch(apiCallError(error));
            console.log(error);
        });

    };
}