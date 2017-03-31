import { tassign } from 'tassign';
import { INCREMENT, DECREMENT, RESET } from './actions';

export interface ICounterState {
    count: number;
    lastUpdate: Date; 
}

export const COUNTER_INITIAL_STATE: ICounterState = {
    count: 0,
    lastUpdate: null
}


function increment(state, action) {
    return tassign(state, { 
        count: state.count + 1, 
        lastUpdate: new Date()});
}

function decrement(state, action) {
    return tassign(state, { 
        count: state.count - 1, 
        lastUpdate: new Date()});
}

function reset(state, action) {
    return tassign(state, COUNTER_INITIAL_STATE);
}


export function counterReducer(state: ICounterState = COUNTER_INITIAL_STATE, action): ICounterState {
    switch (action.type) {
        case INCREMENT:  return increment(state, action);
        case DECREMENT:  return decrement(state, action);
        case RESET:  return reset(state, action);
    }
    return state;
}