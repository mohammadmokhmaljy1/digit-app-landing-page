import HeroSection from './components/HeroSection';
import ChoosenSection from './components/ChoosenSection';
import BrowsingSection from './components/BrowsingSection';
import AvailibleTools from './components/AvailibleTools';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "شركة WEBC | الصفحة الرئيسية";
    }, []);

    return (
        <>
            <HeroSection />
           
            <AvailibleTools />
            <BrowsingSection />
        </>
    )
}

export default Home;