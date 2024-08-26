// #73b1a6

const ContactUs = () => {
    return (
        <div className="py-6 md:py-20 px-4 max-w-6xl mx-auto">
            <div className="max-w-2xl p-4 mx-auto bg-gray-200/40 rounded-2xl">
                <h1 className="text-3xl font-bold font-serif text-center"><span className="text-[#73b1a6]">Contact</span>  us</h1>
                <div>
                <from>
                    <div className="space-y-4 py-12">
                    <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered input-success w-full"/>
                    <input
                    type="number"
                    placeholder="Your Phone Number"
                    className="input input-bordered input-success w-full"/>
                    <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered input-success w-full"/>
                    <textarea className="textarea textarea-success w-full" placeholder="Your Massage"></textarea>
                    <div className="flex justify-center items-center">
                    <button className="px-6 py-2 bg-yellow-400 font-semibold text-white rounded-xl flex items-center gap-2 shadow-[0px_10px_10px_-7px_#e4e810] hover:bg-[#73b1a6] duration-300">Contact Us</button>
                    </div>
                    </div>
                </from>
                </div>
            </div>
            
        </div>
    );
};

export default ContactUs;