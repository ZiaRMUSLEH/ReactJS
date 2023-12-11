import * as types from "../types/types";

// types = {INCREMENT, DECREMENT, RESET}

export const increment = (payload) => ({
    type: types.INCREMENT,
    payload: payload,
});

export const decrement = () => ({
    type: types.DECREMENT,
});

export const reset = () => ({
    type: types.RESET,
});
