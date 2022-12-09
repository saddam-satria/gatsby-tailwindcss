import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    );
};

export default MainLayout;
