import { reducers } from './reducers';
import { createStore } from 'redux';

const action = (preloadedState) => {
    return createStore(reducers, preloadedState);
};

export default action