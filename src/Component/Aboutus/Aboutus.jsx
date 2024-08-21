import aboutimg from"../../assets/education-loGlJHVh.png"
import { FaRegClock } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
const Aboutus = () => {
    return (
        <section className="">
            <div className="max-w-6xl mx-auto px-4 py-6 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img src={aboutimg} alt="" className="w-[300px]"/>
                </div>
                <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8">The World's Leading Online learning Platform</h1>
                <div className="space-y-6">
                <div className="flex items-center gap-4 px-4 py-4 text-xl font-semibold bg-gray-200/50 rounded-2xl duration-300 hover:bg-white hover:shadow-[15px_15px_15px_15px_#f7f7f7]">
                    <FaBookOpen/>
                    <p>10,000+ Courses</p>
                </div>
                <div className="flex items-center gap-4 px-4 py-4 text-xl font-semibold bg-gray-200/40 rounded-2xl duration-300 hover:bg-white hover:shadow-[15px_15px_15px_15px_#f7f7f7]">
                    <GrUserExpert/>
                    <p>Expert Instruction</p>
                </div>
                <div className="flex items-center gap-4 px-4 py-4 text-xl font-semibold bg-gray-200/40 rounded-2xl duration-300 hover:bg-white hover:shadow-[15px_15px_15px_15px_#f7f7f7]">
                    <FaRegClock/>
                    <p>Lifetime Access</p>
                </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutus;