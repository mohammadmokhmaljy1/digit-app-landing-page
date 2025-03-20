import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <Link to="#" className="p-2 text-center">المميزات </Link>
            <Link to="#" className="p-2 text-center">الأسعار </Link>
            <Link to="#" className="p-2 text-center">آراء العملاء </Link>
            <Link to="#" className="p-2 text-center">الأسئلة الشائعة</Link>
        </>
    )
}

export default Navbar;