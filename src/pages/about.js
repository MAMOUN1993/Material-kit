import Header from "../components/reused components/Header"
import Footer from "../components/reused components/footer";
import Landing from "../components/about_us/landing";
import Search from "../components/about_us/search";
import Exect from "../components/about_us/executive";
import Marks from "../components/about_us/marks";
import Increz from "../components/about_us/increz";
import Eveoltion from "../components/about_us/eveoltion";
 const About = () => {
    return ( 
        <div className="about-page">
            <Header/>
            <Landing/>
            <div className="container">
             <Search/>  
             <Exect/> 
             <Marks/>
             <Increz/>
             <Eveoltion/>
            </div>
            <Footer/>
        </div> 
    );
}
 
export default About;