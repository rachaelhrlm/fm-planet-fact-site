import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Planet } from '../../type';
import { PlanetUtils } from '../../utils';
import { MenuItem } from '../menuItem';

export interface MenuProps {
    isVisible: boolean;
    onClick: (planet: Planet) => void;
}

export const Menu: FunctionComponent<MenuProps> = ({ isVisible, onClick }) => {
    return (
        <nav className={classNames('h-screen w-screen absolute bg-black-500 justify-center pt-24 px-6 z-10 md:hidden', { hidden: !isVisible })}>
            {PlanetUtils.options.map((planet) => (
                <MenuItem key={planet} onClick={() => onClick(planet)} planet={planet} />
            ))}
        </nav>
    );
};
