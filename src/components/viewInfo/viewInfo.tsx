import React, { FunctionComponent } from 'react';

export const ViewInfo: FunctionComponent = ({ children }) => {
    return <p className="font-sans text-xs text-white leading-loose">{children}</p>;
};
