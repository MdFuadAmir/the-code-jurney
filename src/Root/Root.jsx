import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;