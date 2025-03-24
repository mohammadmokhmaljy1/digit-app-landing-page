import { Link } from "react-router-dom";
import BarsIcon from './../icons/BarsIcon';
import CloseIcon from './../icons/CloseIcon';
import { useState, useEffect } from "react";
import Navbar from './Navbar';
import logo from './../../assets/images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleHandle = () => {
        setIsOpen(!isOpen);
    }

    const scrollHandle = () => {
        setIsScrolled(window.scrollY > 50);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandle);
        return () => {
            window.removeEventListener('scroll', scrollHandle);
        };
    }, []);

    const headerClasses = 'flex justify-around items-center p-3 fixed w-full top-0 bg-white z-999 ';
    return (
        <>
            <header className={headerClasses + (isScrolled ? 'shadow-xl' : '' )} onScroll={scrollHandle}>
                <div className="sider-btn w-5 cursor-pointer" onClick={toggleHandle}>
                    {isOpen ? <CloseIcon color="#000" /> : <BarsIcon color="#000" />}
                </div>

                <Link to='/' className="select-none">
                    <img src={logo} alt="" className="w-25" />
                </Link>

                <nav>
                    <Navbar />
                </nav>
            </header>

            {
                isOpen ? 
                <aside className="flex flex-col g-2 shadow-lg fixed top-18 w-full bg-white">
                    <Navbar />
                </aside> : ""
            }
            
        </>
    )
}

export default Header;