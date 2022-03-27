import React, { FunctionComponent } from 'react';

export const Information: FunctionComponent = ({ children }) => {
    return <p className="font-sans text-xs text-white leading-loose">{children}</p>;
};
