import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Toggle from "../components/dark/Toggle";

const MainLayout = () => {


    return (
        <div >
            <Nav></Nav>
            <div>
                <Toggle></Toggle>
            </div>
            <div className="px-1">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;