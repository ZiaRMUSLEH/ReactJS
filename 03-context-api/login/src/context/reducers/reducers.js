import * as types from "../types/types";
import { initialStates } from "../initial-states/initial-states";

export const reducer = (state = initialStates, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                user: null,
            };
        case types.LOGOUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};
