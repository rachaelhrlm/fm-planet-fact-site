import React, { FunctionComponent } from 'react';

export const Title: FunctionComponent = ({ children }) => {
    return <h1 className="font-title text-4xl text-white uppercase">{children}</h1>;
};
