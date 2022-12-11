import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export const Head = () => (
    <>
        <title>Hello World</title>
        <meta name="description" content="Hello World" />
    </>
)

export default MainLayout;
