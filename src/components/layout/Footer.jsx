import { Link } from "react-router-dom";
import EmailIcon from './../icons/EmailIcon';
import PhoneIcon from './../icons/PhoneIcon';
import WhatsappIcon from './../icons/WhatsappIcon';
import TelegramIcon from './../icons/TelegramIcon';
import InstagramIcon from './../icons/InstagramIcon';
import Logo from './../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className='w-full p-8 flex-wrap flex justify-evenly items-start gap-5' style={{backgroundColor: "var(--secondary-color)", color: "var(--primary-color)"}}>
            <section className='w-70'>
                <img src={Logo} alt="" />
                <p style={{color: "#ccc"}}>توفير حلول متكاملة وعالية الجودة في مجالات الطاقة.</p>
            </section>

            <section className='w-70'>
                <h1 className='text-2xl mb-3'>روابط سريعة</h1>
                <Link className="block mb-2" style={{color: "#ccc"}} to="#">الخدمات</Link>
                <Link className="block mb-2" style={{color: "#ccc"}} to="#">المميزات</Link>
                <Link className="block mb-2" style={{color: "#ccc"}} to="#">التسعير</Link>
            </section>

            <section className="w-70">
                <h1 className='text-2xl mb-3'>تواصل معنا</h1>
                <a href="#" style={{color: "#ccc"}} className="flex items-center gap-2 mb-2"><EmailIcon color="#ccc" /> support@webc.com</a>
                <a href="#" style={{color: "#ccc"}} className="flex items-center gap-2 mb-2"><span dir="ltr">+12 654 789 21 <PhoneIcon color="#ccc" /></span></a>
            </section>

            <section className="w-70">
                <h1 className='text-2xl mb-3'>تابعنا</h1>
                <a href="#" style={{color: "#ccc"}} className="inline m-2"><InstagramIcon color="#ccc" /></a>
                <a href="#" style={{color: "#ccc"}} className="inline m-2"><WhatsappIcon color="#ccc" /></a>
                <a href="#" style={{color: "#ccc"}} className="inline m-2"><TelegramIcon color="#ccc" /></a>
            </section>

            <hr className="w-full" style={{borderColor: "gray"}} />

            <p style={{color: "#ccc"}} className="w-full text-center">جميع حقوق النشر محفوظة لتطبيق WEBC &copy;</p>
        </footer>
    )
}

export default Footer;