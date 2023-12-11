import * as types from "../types/types";
import { counterInitialState } from "../initial-states/initial-states";

// const increment = {type: types.INCREMENT, payload: 20}

export const counterReducer = (state = counterInitialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
            };
        case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case types.RESET:
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
};
