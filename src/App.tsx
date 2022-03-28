import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:planetId" element={<Home />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
