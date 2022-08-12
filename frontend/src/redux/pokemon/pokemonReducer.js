import * as types from './pokemonActions';

const initialState = { 
    form: {
        name: '',
        ability: '',
        moveOne: '',
        moveTwo: '',
        moveThree: '',
        moveFour: '',
        item: '',
        nature: '',
        hpEV: 0,
        atkEV: 0,
        defEV: 0,
        spAtkEV: 0,
        spDefEV: 0,
        spdEV: 0,
        description: ''
    }
}

export default function pokemonReducer(state = initialState, action){
    switch (action.type){
        case types.UPDATE_NAME:
            return {
                ...state,
                name: action.name,
            };
        case types.UPDATE_ABILITY:
            return {
                ...state,
                ability: action.ability,
            };
        default:
            return state;
    }
}