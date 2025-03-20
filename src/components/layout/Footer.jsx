import { Link } from "react-router-dom";
import EmailIcon from './../icons/EmailIcon';
import PhoneIcon from './../icons/PhoneIcon';
import WhatsappIcon from './../icons/WhatsappIcon';
import TelegramIcon from './../icons/TelegramIcon';
import InstagramIcon from './../icons/InstagramIcon';

const Footer = () => {
    return (
        <footer className='w-full p-8 text-white flex-wrap flex justify-evenly items-center gap-5' style={{backgroundColor: "#0d1325"}}>
            <section className='w-70'>
                <h1 className='text-2xl mb-3'>تطبيق ديجيتال</h1>
                <p style={{color: "silver"}}>تجربة رقمية متطورة تجمع بين التقنية وسهولة الاستخدام.</p>
            </section>

            <section className='w-70'>
                <h1 className='text-2xl mb-3'>روابط سريعة</h1>
                <Link className="block mb-2" style={{color: "silver"}} to="#">عن التطبيق</Link>
                <Link className="block mb-2" style={{color: "silver"}} to="#">المميزات</Link>
                <Link className="block mb-2" style={{color: "silver"}} to="#">التسعير</Link>
            </section>

            <section className="w-70">
                <h1 className='text-2xl mb-3'>تواصل معنا</h1>
                <a href="#" style={{color: "silver"}} className="flex items-center gap-2 mb-2"><EmailIcon /> support@degital-app.com</a>
                <a href="#" style={{color: "silver"}} className="flex items-center gap-2 mb-2"><PhoneIcon /> +12 654 789 21</a>
            </section>

            <section className="w-70">
                <h1 className='text-2xl mb-3'>تابعنا</h1>
                <a href="#" style={{color: "silver"}} className="inline m-2"><InstagramIcon color="silver" /></a>
                <a href="#" style={{color: "silver"}} className="inline m-2"><WhatsappIcon color="silver" /></a>
                <a href="#" style={{color: "silver"}} className="inline m-2"><TelegramIcon color="silver" /></a>
            </section>

            <hr className="w-full" style={{borderColor: "gray"}} />

            <p style={{color: "silver"}} className="w-full text-center">جميع حقوق النشر محفوظة لتطبيق ديجيتال &copy;</p>
        </footer>
    )
}

export default Footer;