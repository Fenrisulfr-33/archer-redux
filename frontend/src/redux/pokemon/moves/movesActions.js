import * as pokemonApi from '../../../pages/api/pokemonApi';
import { beginApiCall, apiCallError } from "../../apiStatus/apiStatusActions";

export const LOAD_MOVES_SUCCESS = 'LOAD_MOVES_SUCCESS';
export const LOAD_MOVE_SUCCESS = 'LOAD_MOVE_SUCCESS';

export const loadMovesSuccess = (moves) => {
    return { type: LOAD_MOVES_SUCCESS, moves };
}
export const loadMoveSuccess = (move) => {
    return { type: LOAD_MOVE_SUCCESS, move };
}
export const loadMoves = () => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getMoves()
        .then(moves => {
            dispatch(loadMovesSuccess(moves));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}

export const loadMove = (id) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return pokemonApi.getMove(id)
        .then(move => {
            dispatch(loadMoveSuccess(move));
        }).catch(error => {
            dispatch(apiCallError(error));
        });
    };
}