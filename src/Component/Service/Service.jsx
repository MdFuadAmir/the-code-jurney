// #73b1a6
import { TbWorldWww } from "react-icons/tb";
import { CiMobile1 } from "react-icons/ci";
import { TbDevicesPc } from "react-icons/tb";
import { FaRegSmileBeam } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa6"
const servicedata =[
    {
        id:1,
        name:"Web Development",
        logo:<TbWorldWww size={40}/>
    },
    {
        id:2,
        name:"Mobile development",
        logo:<CiMobile1 size={40}/>
    },
    {
        id:3,
        name:"Software development",
        logo:<TbDevicesPc size={40}/>
    },
    {
        id:4,
        name:"Satisfied clients",
        logo:<FaRegSmileBeam size={40}/>
    },
    {
        id:5,
        name:"SEO optimization",
        logo:<TbSeo size={40}/>
    },
    {
        id:6,
        name:<h1>24/7 <br /> Support</h1>,
        logo:<FaHeadset size={40}/>
    },
]
const Service = () => {
    return (
        <div className="mx-auto max-w-6xl px-4 py-6 md:py-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Services we <span className="text-[#73b1a6]">provide !</span></h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center py-12">
                {
                    servicedata.map((data)=>(<div key={data.id} className="flex flex-col items-center bg-gray-200/40 p-6 rounded-2xl space-y-8 duration-300 hover:bg-white hover:shadow-[15px_15px_15px_15px_#f7f7f7]">
                        {data.logo}
                        <h1 className="text-xl text-center font-bold text-gray-700">{data.name}</h1>

                    </div>))
                }

            </div>
            
        </div>
    );
};

export default Service;