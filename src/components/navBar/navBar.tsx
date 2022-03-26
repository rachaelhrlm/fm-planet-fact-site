import React, { FunctionComponent } from 'react';
import { Planet } from '../../type';
import { PlanetUtils } from '../../utils';
import { NavItem } from '../navItem';

export interface NavBarProps {
    onClick: (planet: Planet) => void;
}

export const NavBar: FunctionComponent<NavBarProps> = ({ onClick }) => {
    return (
        <nav className="p-5 pt-10 w-full hidden place-items-center md:flex md:justify-evenly md:pt-5 xl:flex-1 xl:p-0 xl:absolute xl:top-0 xl:right-0 xl:w-1/2">
            {PlanetUtils.options.map((planet) => (
                <NavItem planet={planet} onClick={() => onClick(planet)} />
            ))}
        </nav>
    );
};
