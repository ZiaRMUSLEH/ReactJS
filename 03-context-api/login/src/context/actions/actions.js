import * as types from "../types/types";

export const loginSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload,
});

export const loginFailure = () => ({
    type: types.LOGIN_FAILURE,
});

export const logout = () => ({
    type: types.LOGOUT,
});
