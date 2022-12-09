import { reducers } from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

/**
 *
 * @chromeExtension -> return redux dev tools
 */

const chromeExtension = () => {
    return process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
};


export const store = createStore(reducers, compose(applyMiddleware(thunk), chromeExtension()));
