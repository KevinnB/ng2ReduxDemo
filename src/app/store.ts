import { IUserState, USER_INITIAL_STATE, userReducer } from './users/store';
import { tassign } from 'tassign';
import { combineReducers } from 'redux';
import { ICounterState, counterReducer, COUNTER_INITIAL_STATE } from './counter/store';

export interface IAppState {
    counter: ICounterState;
    users: IUserState
}

export const APP_INITIAL_STATE: IAppState = {
    counter: COUNTER_INITIAL_STATE,
    users: USER_INITIAL_STATE
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer
});