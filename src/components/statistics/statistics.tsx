import React, { FunctionComponent } from 'react';
import { StatItem } from '..';
import { PlanetData } from '../../type';

export interface StatisticsProps {
    planetData?: PlanetData;
}

export const Statistics: FunctionComponent<StatisticsProps> = ({ planetData }) => {
    return (
        <section className="grid grid-cols-1 gap-2 pt-3 p-5 text-center">
            <StatItem title="Rotation Time" value={planetData?.rotation} />
            <StatItem title="Revolution Time" value={planetData?.revolution} />
            <StatItem title="Radius" value={planetData?.radius} />
            <StatItem title="Average Temp." value={planetData?.temperature} />
        </section>
    );
};
