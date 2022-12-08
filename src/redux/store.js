import { createStore } from 'redux';
import { reducers } from './reducers';

const store = preloadedState => {
    return createStore(reducers, preloadedState)
};

export default store