import imageOne from "../../files/imag/about us image/logo-coinbase.87e91c7f.svg"
import imageTow from "../../files/imag/about us image/logo-nasa.c5d11f88.svg"
import imageThree from "../../files/imag/about us image/logo-netflix.432ed6b5.svg"
import imageFour from "../../files/imag/about us image/logo-pinterest.84470903.svg"
import imageFive from "../../files/imag/about us image/logo-spotify.7e255dc6.svg"
import imageSix from "../../files/imag/about us image/logo-vodafone.b3e8486c.svg"
const Marks = () => {
    return ( 
        <div className="container-two">
            <div className="marks-main">
                <img src={imageOne} alt=""/>
                <img src={imageTow} alt=""/>
                <img src={imageThree} alt=""/>
                <img src={imageFour} alt=""/>
                <img src={imageFive} alt=""/>
                <img src={imageSix} alt=""/>
            </div>
        </div>
     );
}
 
export default Marks;