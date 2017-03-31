import { tassign } from 'tassign';
import { FETCH_USERS_FETCHING, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from './actions';

export interface IUserState {
    users: Array<any>;
    loading: boolean;
    error: boolean;
}

export const USER_INITIAL_STATE: IUserState = {
    users: [],
    loading: false,
    error: false
}


function fetchingUsers(state, action) {
    return tassign(state, {
        loading: true
    });
}

function successFetchingUsers(state, action) {
    return tassign(state, {
        loading: false,
        error: false,
        users: action.users
    });
}

function errorFetchingUsers(state, action) {
    return tassign(state, {
        loading: false,
        error: true
    });
}


export function userReducer(state: IUserState = USER_INITIAL_STATE, action): IUserState {
    switch (action.type) {
        case FETCH_USERS_FETCHING: return fetchingUsers(state, action);
        case FETCH_USERS_SUCCESS: return successFetchingUsers(state, action);
        case FETCH_USERS_ERROR: return errorFetchingUsers(state, action);
    }
    return state;
}