import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home/Home";
import Service from "../Component/Service/Service";
import Aboutus from "../Component/Aboutus/Aboutus";

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
        ]    
    }
])
export default router;