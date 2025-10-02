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
        <h1> amina naaso welcome in github </h1>
        <p>hiii</p>
            <HeroSection />
            <ChoosenSection />
            <AvailibleTools />
            <BrowsingSection />
        </>
    )
}

export default Home;