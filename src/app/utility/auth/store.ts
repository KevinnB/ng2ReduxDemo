import { tassign } from 'tassign';
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, ATTEMPTING_LOGIN, ATTEMPTING_LOGOUT, VALIDATE_TOKEN, VALIDATE_TOKEN_ERROR, VALIDATE_TOKEN_SUCCESS } from './actions';
import { AuthModel } from './auth.model';

export interface IAuthState {
    isAuthenticated: boolean,
    loading: boolean,
    error: boolean,
    errorMessage: string,

    localProfile: AuthModel
}

export const AUTH_INITIAL_STATE: IAuthState = {
    isAuthenticated: false,
    loading: false,
    error: false,
    errorMessage: '',
    localProfile: null,
}


function loginSuccess(state, action) {
    return tassign(state, {
        isAuthenticated: true,
        localProfile: new AuthModel(action.profile)
    });
}

function loginError(state, action) {
    return tassign(state, {
        isAuthenticated: false,
        error: true,
        loading: false,
        errorMessage: action.error,
        localProfile: null
    });
}

function logout(state, action) {
    return tassign(state, AUTH_INITIAL_STATE);
}

export function authReducer(state: IAuthState = AUTH_INITIAL_STATE, action): IAuthState {
    switch (action.type) {
        case LOGIN_SUCCESS: return loginSuccess(state, action);
        case LOGIN_ERROR: return loginError(state, action);
        case LOGOUT_SUCCESS: return logout(state, action);
        case VALIDATE_TOKEN_ERROR: return logout(state, action);
    }
    return state;
}