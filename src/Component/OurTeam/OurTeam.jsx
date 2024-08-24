// #73b1a6
import profile from"../../assets/profile.jpg"
const teamdata =[
    {
        id:1,
        name:"AMBER GRACE W.",
        position:"CHIEF EXECUTIVE OFFICER",
        profile: profile,
        discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id:2,
        name:"KHALED STEWARD",
        position:"CHIEF OPERATIONS OFFICER",
        profile: profile,
        discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id:3,
        name:"MICHAEL JOSEPH",
        position:"VICE PRESIDENT OF SALES",
        profile: profile,
        discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id:4,
        name:"YOSHIRA MOSHIBE",
        position:"HUMAN RESOURCE MANAGER",
        profile: profile,
        discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
]
const OurTeam = () => {
    return (
        <section className="py-6 md:py-20 px-4 max-w-6xl mx-auto">
            <div className="mb-6 md:mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-center mb-4">Our <span className="text-[#73b1a6]">team</span></h1>
                <p className="text-gray-400 w-full md:max-w-3xl text-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt, totam minus molestias asperiores accusamus iure non. Incidunt aliquam dolorum sit dolores doloremque nam. Tempora nisi minima, aperiam non cum, alias quasi obcaecati delectus repellat quam unde possimus reiciendis, ex voluptates!</p>
            </div>
            {/*  */}
            <div className="py-6 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    teamdata.map((data) =>(<div key={data.id} className="bg-[#73b1a6] rounded-t-full p-2">
                        <div className="flex items-center justify-center">
                            <img src={data.profile} alt=""  className="rounded-full"/>
                        </div>
                        <div className="py-6 text-center text-white">
                            <h1 className="text-xl font-bold font-serif">{data.name}</h1>
                            <p className="font-semibold">{data.position}</p>
                            <hr className="mt-4"/>
                            <p className="py-4">{data.discription}</p>

                        </div>
                        
                    </div>))
                }

            </div>
           
        </section>
    );
};

export default OurTeam;