import heroimg from"../../assets/hero-CR2JtPul.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="bg-gray-200/40">
            <section className="max-w-6xl mx-auto px-4 py-6 md:py-12">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                <div>
                    <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif">Let's Learn to</h1>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif">build a <span className="text-[#73b1a6]">Website</span></h1>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif">for your business</h1>
                    </div>
                    <div className="mt-12">
                    <button className="px-6 py-2 bg-yellow-400 font-semibold text-white rounded-xl flex items-center gap-2 shadow-[0px_10px_10px_-7px_#e4e810] hover:bg-[#73b1a6] duration-300">Get Started <FaArrowRightLong/></button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={heroimg} alt="" />
                </div>
            </div>
            </section>
        </div>
    );
};

export default Hero;