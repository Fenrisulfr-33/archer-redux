import * as types from './counterActions';

const initialState = {
    counter: 0
}

export default function counterReducer(state = initialState, action){
    switch (action.type){
        case types.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case types.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case types.RESET:
            return {
                ...state,
                counter: 0,
            };
        default:
            return state;
    }
}