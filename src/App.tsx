import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:planetId" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
