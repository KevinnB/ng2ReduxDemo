import { tassign } from 'tassign';
import { combineReducers } from 'redux';
import { ICounterState, counterReducer, COUNTER_INITIAL_STATE } from './counter/store';

export interface IAppState {
    counter: ICounterState;
}

export const APP_INITIAL_STATE: IAppState = {
    counter: COUNTER_INITIAL_STATE
}

export const rootReducer = combineReducers({
  counter: counterReducer
});