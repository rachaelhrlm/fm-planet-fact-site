import React, { FunctionComponent, useState } from 'react';
import { Planet, View } from '../../type';
import { Hamburger } from '../icons';
import { Menu } from '../menu';
import { NavBar } from '../navBar';
import { ViewBar } from '../viewBar';

export interface NavigationProps {
    onNavigate: (path: string) => void;
    onViewSelect: (view: View) => void;
    planet: Planet;
    view: View;
}

export const Navigation: FunctionComponent<NavigationProps> = ({ onNavigate, onViewSelect, planet, view }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <>
            <header className="w-full border-b-2 border-white/10 p-5 flex justify-between place-items-center fixed z-30 bg-black-500 bg-starry-pattern md:static md:pt-10 md:block md:text-center xl:pt-5 xl:flex xl:relative xl:px-10">
                <h1 className="uppercase text-white text-title font-title text-3xl xl:flex-1 xl:text-left">The Planets</h1>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Hamburger />
                </button>
                <NavBar onClick={(planet: Planet) => onNavigate(`/${planet}`)} />
            </header>
            <Menu
                isVisible={isMenuOpen}
                onClick={(planet: Planet) => {
                    setIsMenuOpen(false);
                    onNavigate(`/${planet}`);
                }}
            />
            <ViewBar onClick={(view: View) => onViewSelect(view)} planet={planet} view={view} />
        </>
    );
};
