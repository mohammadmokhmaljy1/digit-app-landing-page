import { Outlet } from "react-router-dom"
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const UserLayout = ({children}) => {
    return (
        <>
            <Header />
            <Outlet />
            {children}
            <Footer />
        </>
    )
}

export default UserLayout
