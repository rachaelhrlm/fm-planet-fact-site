import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Hamburger, Menu, NavBar } from '../../components';
import { Planet } from '../../type';

export const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    const { planetId } = useParams();

    return (
        <div className="bg-black-500 w-screen h-screen bg-starry-pattern">
            <header className="w-full border-b-2 border-white/10 p-5 flex justify-between place-items-center fixed bg-black-500 bg-starry-pattern md:pt-10 md:block md:text-center xl:pt-5 xl:flex xl:relative">
                <h1 className="uppercase text-white text-title font-title text-3xl xl:flex-1 xl:text-left">The Planets</h1>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Hamburger />
                </button>
                <NavBar onClick={(planet: Planet) => navigate(`/${planet}`)} />
            </header>
            <Menu
                isVisible={isMenuOpen}
                onClick={(planet: Planet) => {
                    setIsMenuOpen(false);
                    navigate(`/${planet}`);
                }}
            />
        </div>
    );
};
