import React, { FunctionComponent } from 'react';
import { Chevron } from '..';
import { Planet } from '../../type';
import { PlanetUtils } from '../../utils';

export interface MenuItemProps {
    onClick: () => void;
    planet: Planet;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({ onClick, planet }) => {
    return (
        <button
            onClick={onClick}
            className="font-sans font-bold text-white uppercase border-b border-white/10 py-5 px-0 flex justify-between place-items-center w-full tracking-wider">
            <span className="flex">
                <span className={`h-5 w-5 ${PlanetUtils.colors[planet].nav} rounded-full mr-4`} /> {planet}
            </span>
            <Chevron className="flex justify-self-end" />
        </button>
    );
};
