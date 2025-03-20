import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import './assets/styles/global.css';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<Home />}  />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;