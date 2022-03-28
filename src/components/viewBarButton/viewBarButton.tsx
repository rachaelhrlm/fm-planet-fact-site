import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Planet, View } from '../../type';
import { PlanetUtils } from '../../utils';

export interface ViewBarButtonProps {
    isSelected: boolean;
    onClick: () => void;
    planet: Planet;
    view: View;
}

export const ViewBarButton: FunctionComponent<ViewBarButtonProps> = ({ isSelected, onClick, planet, view }) => {
    return (
        <button className="font-sans font-bold text-2xs uppercase tracking-widest text-white/75 hover:text-white group flex" onClick={onClick}>
            <p className="relative group flex">
                {view}
                <span
                    className={classNames(
                        `h-1 w-full absolute ${PlanetUtils.colors[planet].accent} opacity-0 -bottom-5 transition-all ease-in-out duration-300 group-hover:opacity-100`,
                        { 'opacity-100': isSelected },
                    )}
                />
            </p>
        </button>
    );
};
