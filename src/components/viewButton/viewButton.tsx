import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Planet, View } from '../../type';
import { PlanetUtils } from '../../utils';

export interface ViewButtonProps {
    isSelected: boolean;
    number: string;
    onClick: () => void;
    planet: Planet;
    view: View;
}

export const ViewButton: FunctionComponent<ViewButtonProps> = ({ isSelected, number, onClick, planet, view }) => {
    return (
        <button
            className={classNames(
                { [PlanetUtils.colors[planet].accent]: isSelected },
                `border border-white/20 px-5 py-3 h-10 flex place-items-center gap-4 font-sans font-bold text-2xs uppercase hover:bg-grey-700/20 hover:border-white/0 transition ease-in-out duration-300`,
            )}
            onClick={onClick}>
            <span className="text-white/50">{number}</span>
            <h1 className="text-white">{view}</h1>
        </button>
    );
};
