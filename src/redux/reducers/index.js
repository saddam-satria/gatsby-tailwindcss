import { combineReducers } from 'redux';
import { DECREASE, INCREASE } from '../types'

const initalState = {
    data: 0,
    error: false,
    message: null,
    loading: false,
    token: null,
};

const counter = (state = initalState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                data: state.data + 1
            }

        case DECREASE:
            return {
                ...state,
                data: state.data < 1 ? 0 : state.data - 1
            }
        default:
            return state;
    }
};



export const reducers = combineReducers({
    counter,
});