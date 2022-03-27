import React, { FunctionComponent } from 'react';

export interface StatItemProps {
    title: string;
    value?: string;
}

export const StatItem: FunctionComponent<StatItemProps> = ({ title, value }) => {
    return (
        <div className="border border-white/20 w-full flex justify-between place-items-center p-3 uppercase">
            <h1 className="font-sans font-bold text-2xs text-white/50">{title}</h1>
            <p className="font-title text-white text-xl">{value}</p>
        </div>
    );
};
