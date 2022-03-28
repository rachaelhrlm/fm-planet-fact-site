import React, { FunctionComponent } from 'react';

export const Title: FunctionComponent = ({ children }) => {
    return <h2 className="font-title text-4xl text-white uppercase xl:text-7xl">{children}</h2>;
};
