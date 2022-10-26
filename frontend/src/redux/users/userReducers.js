import * as types from './userActions';
import initialState from '../initialState';

export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                username: action.user.username,
                id: action.user._id,
                token: action.user.token,
                pokemonTeams: action.user.pokemonTeams 
            };
        case types.USER_REGISTER_SUCCESS:
            return {
                ...state,
                username: action.user.username,
                id: action.user._id,
                token: action.user.token 
            };
        case types.USER_LOGOUT:
            return {
                ...state,
                username: '',
                id: '',
                token: '', 
                pokemonTeams: []
            };
        default:
            return state;
    }
}