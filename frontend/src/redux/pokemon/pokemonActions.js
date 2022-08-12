export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_ABILITY = 'UPDATE_ABILITY';
export const UPDATE_MOVE_ONE = 'UPDATE_MOVE_ONE';
export const UPDATE_MOVE_TWO = 'UPDATE_MOVE_TWO';
export const UPDATE_MOVE_THREE = 'UPDATE_MOVE_THREE';
export const UPDATE_MOVE_FOUR = 'UPDATE_MOVE_FOUR';
export const UPDATE_ITEM= 'UPDATE_ITEM';
export const UPDATE_NATURE= 'UPDATE_NATURE';
export const UPDATE_HP_EV= 'UPDATE_HP_EV';
export const UPDATE_ATK_EV= 'UPDATE_ATK_EV';
export const UPDATE_DEF_EV= 'UPDATE_DEF_EV';
export const UPDATE_SPATK_EV= 'UPDATE_SPATK_EV';
export const UPDATE_SPDEF_EV= 'UPDATE_SPDEF_EV';
export const UPDATE_SPD_EV= 'UPDATE_SPD_EV';
export const UPDATE_DESC= 'UPDATE_DESC';

export const updateName = (name) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_NAME,
            name,
        });
    };
};

export const updateAbility = (ability) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_ABILITY,
            ability,
        });
    };
};