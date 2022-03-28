import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailImage, Navigation, SourceLink, Statistics, Title, ViewInfo, ViewSelect } from '../../components';
import { Planet, PlanetData, View } from '../../type';
import { PlanetUtils } from '../../utils';

export const Home = () => {
    const [selectedPlanet, setSelectedPlanet] = useState<Planet>(Planet.MERCURY);
    const [planetData, setPlanetData] = useState<PlanetData>();
    const [selectedView, setSelectedView] = useState<View>(View.OVERVIEW);

    const { planetId } = useParams();

    useEffect(() => {
        if (planetId && PlanetUtils.options.includes(planetId as Planet)) {
            setSelectedPlanet(planetId as Planet);
        }

        return () => {
            setSelectedPlanet(Planet.MERCURY);
        };
    }, [planetId]);

    useEffect(() => {
        PlanetUtils.getData(selectedPlanet).then((data) => {
            setPlanetData(data);
        });
    }, [selectedPlanet]);

    const navigate = useNavigate();

    return (
        <div className="bg-black-500 w-full min-h-screen bg-starry-pattern">
            <Navigation
                onNavigate={(path: string) => navigate(path)}
                onViewSelect={(view: View) => setSelectedView(view)}
                planet={selectedPlanet}
                view={selectedView}
            />

            <main className="pt-36 grid grid-cols-1 justify-center md:pt-0 xl:justify-items-center">
                <div className="sm:p-5 xl:w-[1240px] 2xl:w-[1300px]">
                    <div className="xl:flex xl:place-items-center">
                        <div className="w-full h-width flex justify-center place-items-center p-6 relative sm:h-[20rem] md:h-[30rem] xl:h-[35rem] 2xl:h-[40rem]">
                            <img
                                style={{ width: `auto`, height: `${PlanetUtils.getRadius(planetData)}%`, objectFit: 'contain' }}
                                src={`${process.env.PUBLIC_URL}${PlanetUtils.getImage(selectedView, planetData)}`}
                                alt={`${selectedPlanet} ${selectedView}`}
                            />
                            <DetailImage isVisible={selectedView === View.SURFACE} planetData={planetData} view={selectedView} />
                        </div>

                        <div className="md:flex justify-between place-items-center xl:block xl:w-[50%]">
                            <section className="grid grid-cols-1 gap-5 p-5 text-center place-content-between h-[19rem] md:h-[16rem] md:text-left md:w-1/2 xl:w-full xl:h-[18rem]">
                                <div className="grid grid-cols-1 gap-[1rem] xl:gap-[2.5rem]">
                                    <Title>{planetData?.name}</Title>
                                    <ViewInfo>{PlanetUtils.getViewInfo(selectedView, planetData)?.content}</ViewInfo>
                                </div>
                                <SourceLink link={PlanetUtils.getViewInfo(selectedView, planetData)?.source} />
                            </section>

                            <ViewSelect onClick={(view: View) => setSelectedView(view)} planet={selectedPlanet} view={selectedView} />
                        </div>
                    </div>
                    <Statistics planetData={planetData} />
                </div>
            </main>
        </div>
    );
};
