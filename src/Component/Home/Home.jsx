import Aboutus from "../Aboutus/Aboutus";
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
        </div>
    );
};

export default Home;