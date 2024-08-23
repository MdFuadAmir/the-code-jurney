import banner from"../../assets/banner-D9M2H9os.png"

const Community = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-20">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                <div className="w-full md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold font-serif ">Join Our Community to Start your Journey</h1>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repudiandae possimus cum laudantium voluptatibus porro doloribus odio at id, corrupti ut et labore, amet quisquam laborum excepturi! Consectetur, deleniti amet id natus nisi dolorum, ipsa illum dicta animi consequatur rerum sapiente quae, maiores libero eum. Dolores iusto cupiditate accusantium officia.</p>
                <button className="px-6 py-2 bg-yellow-400 font-semibold text-white rounded-xl flex items-center gap-2 shadow-[0px_10px_10px_-7px_#e4e810] hover:bg-[#73b1a6] duration-300">Join Now</button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={banner} alt="" className="w-[350px]"/>
                </div>
            </div>
        </div>
    );
};

export default Community;