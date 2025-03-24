import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <Link to="/" className="p-2 text-center">الصفحة الرئيسية </Link>
            <Link to="/services" className="p-2 text-center">الخدمات </Link>
            <Link to="/contact" className="p-2 text-center"> تواصل معنا</Link>
            <Link to="/about" className="p-2 text-center">من نحن </Link>
        </>
    )
}

export default Navbar;