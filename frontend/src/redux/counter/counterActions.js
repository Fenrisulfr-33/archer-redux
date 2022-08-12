export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const increment = () => {
    return (dispatch) => {
        dispatch({
            type: INCREMENT,
        });
    };
};

export const decrement = () => {
    return (dispatch) => {
        dispatch({
            type: DECREMENT,
        });
    };
};

export const reset = () => {
    return (dispatch) => {
        dispatch({
            type: RESET,
        });
    };
};