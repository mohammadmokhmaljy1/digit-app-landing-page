import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import './assets/styles/global.css';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Loader from "./components/customize/Loader";
import ScrollUp from './components/customize/ScrollUp';
import { useState, useEffect } from 'react';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <Router>
                <ScrollUp />
                {loading && <Loader />}
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<Home />}  />
                        <Route path='/services' element={<Services />}  />
                        <Route path='/services/:id' element={<ServiceDetails />}  />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;