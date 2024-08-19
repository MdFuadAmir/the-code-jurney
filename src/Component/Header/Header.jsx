import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import ResponsiveNavber from "../ResponsiveNavber/ResponsiveNavber";

const navberMenu =[
    {
        id:1,
        title:"Home",
        path:"/home"
    },
    {
        id:2,
        title:"Services",
        path:"/services"
    },
    {
        id:3,
        title:"About Us",
        path:"/aboutus"
    },
    {
        id:4,
        title:"Our Team",
        path:"/ourteam"
    },
    {
        id:5,
        title:"Contact Us",
        path:"/contactus"
    },
]

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className="bg-gray-200/40">

        <div className="p-4 flex justify-between items-center max-w-6xl mx-auto">
            {/* logo */}
            <div>
                <h1 className="text-2xl font-bold">The Coding <span className="text-[#73b1a6]">Journey</span></h1>
            </div>
            {/* menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6">
                    {
                        navberMenu.map((menu) =>(<li key={menu.id}>
                            <Link to={menu.path} className="font-semibold hover:text-[#73b1a6] hover:border-b border-[#73b1a6] duration-300">{menu.title}</Link>
                        </li>))
                    }
                    <button className="px-6 bg-yellow-400 text-white font-semibold py-2 rounded-xl hover:bg-[#73b1a6] duration-300 shadow-[0px_10px_10px_-7px_#e4e810]">Sign in</button>
                </ul>
            </div>
            {/* mobile navber */}
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                <AiOutlineMenu className="text-xl"/>
            </div>
        </div>
        <ResponsiveNavber open={open}/>
        </div>
        </>
            
    );
};

export default Header;