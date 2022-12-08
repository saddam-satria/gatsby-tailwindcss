import { combineReducers } from 'redux';

const initalState = {
    data: "hello world",
    error: false,
    message: null,
    loading: false,
    token: null,
};

const user = (state = initalState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};



export const reducers = combineReducers({
    user,
});