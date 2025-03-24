import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import './assets/styles/global.css';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<Home />}  />
                        <Route path='/services' element={<Services />}  />
                        <Route path='/details' element={<ServiceDetails />}  />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;