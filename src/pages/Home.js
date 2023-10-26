import Header from "../components/reused components/Header"
import BackGround from "../components/home/backgroun";
import bkImgae from '../files/imag/bg-presentation.jpg'
import Footer from "../components/reused components/footer";
import Incerz from "../components/home/incerz";
import Revers from "../components/home/revers";
import Coll from "../components/home/collection";
import Coded from "../components/home/coded";
import Compl from "../components/home/complex";
import Trust from "../components/home/trust";
import Awesome from "../components/home/usom";
import Supp from "../components/home/supp";
const Home = () => {
    
    return (
    <>
        <Header/>
        <BackGround image={bkImgae}/>
        <div className="container">
            <Incerz/>
            <Revers/>
            <Coll/>
            <Coded/>
            <Compl/>
            <Trust/>
            <Awesome/>
            <Supp/>
        </div>
        <Footer/>
    </> 
    );
}

export default Home;