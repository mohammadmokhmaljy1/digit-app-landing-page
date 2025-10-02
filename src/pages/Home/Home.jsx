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
        <h1>افضل شركة للشاحنات</h1>
        <h1> hgahpkhj</h1>
        <h2> خدمة متوفرة على مدار الساعة </h2>
            <HeroSection />
            <ChoosenSection />
            <AvailibleTools />
            <BrowsingSection />
        </>
    )
}

export default Home;