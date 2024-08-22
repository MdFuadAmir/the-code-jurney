import { FaBell } from "react-icons/fa";

const Students = () => {
    return (
        <div className="bg-gray-200/40">
            <div className="max-w-6xl mx-auto py-6 md:py-20 px-4">
            <div className="flex flex-col items-center justify-center space-y-8 max-w-xl mx-auto text-center p-4">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-center">450K+ Students are learning from us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima</p>
                <button className="px-6 py-2 bg-yellow-400 font-semibold text-white rounded-xl flex items-center gap-2 shadow-[0px_10px_10px_-7px_#e4e810] hover:bg-[#73b1a6] duration-300">Subscribe Now <FaBell/></button>

            </div>
        </div>
        </div>


    );
};

export default Students;