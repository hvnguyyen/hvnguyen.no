import MyPortfolio from "../MyPortfolio";
import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import TravelCarousel from "../../../TravelCarousel";



export default function Home () {
    return (
        <>
            <HeroSection />
            <AboutMe/>
            <MyPortfolio />
            <MySkills />
            
            <Footer />
        </>
    );
}