import { Outlet } from "react-router-dom";
import HeaderComponent from '../components/header';

const Layout = () => {
    return (
        <>
            <HeaderComponent/>
            <section>
                <Outlet />
            </section>
        </>
    );
}

export default Layout;