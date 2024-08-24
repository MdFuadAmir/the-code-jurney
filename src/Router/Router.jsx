import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home/Home";
import Service from "../Component/Service/Service";
import Aboutus from "../Component/Aboutus/Aboutus";
import OurTeam from "../Component/OurTeam/OurTeam";
import ContactUs from "../Component/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/services",
                element:<Service/>
            },
            {
                path:"/aboutus",
                element:<Aboutus/>
            },
            {
                path:"/ourteam",
                element:<OurTeam/>
            },
            {
                path:"/contactus",
                element:<ContactUs/>
            },
        ]    
    }
])
export default router;