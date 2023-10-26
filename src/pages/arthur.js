import Header from "../components/reused components/Header";
import Background from "../components/arthur/arther_bg";
import Info from "../components/arthur/artherInfo";
import Blogs from "../components/arthur/Blogs";
import Hi from "../components/arthur/Hi";
import Footer from "../components/arthur/footer";
const Arthur = () => {
    return ( 
        <>
            <Header/>
            <Background/>
            <div className="container">
                <Info/>
                <Blogs/>
            </div>
            <Hi/>
            <Footer/>
        </>
     );
}
 
export default Arthur;