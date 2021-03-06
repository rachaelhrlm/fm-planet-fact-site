import React, { FunctionComponent } from 'react';

export interface StatItemProps {
    title: string;
    value?: string;
}

export const StatItem: FunctionComponent<StatItemProps> = ({ title, value }) => {
    return (
        <div className="border border-white/20 w-full flex justify-between place-items-center p-3 uppercase md:grid md:grid-cols-1 md:justify-items-start md:p-4 md:gap-2 xl:gap-3">
            <h2 className="font-sans font-bold text-2xs text-white/50 xl:text-xs">{title}</h2>
            <p className="font-title text-white text-xl md:text-2xl xl:text-4xl">{value}</p>
        </div>
    );
};
