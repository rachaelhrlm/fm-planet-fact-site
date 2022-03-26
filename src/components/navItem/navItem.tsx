import React, { FunctionComponent } from 'react';
import { Planet } from '../../type';
import { PlanetUtils } from '../../utils';

export interface NavItemProps {
    onClick: () => void;
    planet: Planet;
}

export const NavItem: FunctionComponent<NavItemProps> = ({ onClick, planet }) => {
    return (
        <button
            key={planet}
            onClick={onClick}
            className="font-sans font-bold text-white text-xs uppercase relative flex justify-center place-items-center group pt-8 opacity-75 hover:opacity-100">
            <span
                className={`h-1 w-full hidden ${PlanetUtils.colors[planet].accent} absolute opacity-0 top-0 transition-all ease-in-out duration-300 xl:block xl:group-hover:opacity-100 `}
            />
            {planet}
        </button>
    );
};
