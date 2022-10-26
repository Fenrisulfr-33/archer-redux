import * as types from './teamsActions';
import initialState from '../initialState';

export default function pokemonReducer(state = initialState.user.pokemonTeams, action) {
    switch (action.type) {
        case types.ADD_TEAM_SUCCESS:
            return [
                ...state,
                action.newTeam
            ];
        default:
            return state;
    }
}