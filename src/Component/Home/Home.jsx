import Aboutus from "../Aboutus/Aboutus";
import Community from "../Community/Community";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";
import Students from "../Students/Students";


const Home = () => {
    return (
        <div>
            <Hero/>        
            <Service/>
            <Aboutus/>
            <Students/>
            <Community/>
        </div>
    );
};

export default Home;