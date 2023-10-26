import { useState } from "react";
import imageOne from "../../files/imag/about us image/macbook.webp"
const Evelotion = () => {
    const [attvalue , setvalue ] = useState("false")
    return ( 
        <div className="container-two">
            <div className="evelotion-main">
                <div className="eveoltion-para">
                    <h3>Be the first to see the news</h3>
                    <p>Your company may not be in the software business, but eventually, a software company will be in your business.</p>
                    <div className="evelotion-email">
                        <input type="email" onFocus={()=>{
                            setvalue("true");
                        }} onBlur={()=>{
                            setvalue("false")
                        }}></input>

                        <button> subscribe</button>
                        <p valuew={attvalue}>Email Here...</p>
                    </div>
                </div>
                <div className="evelotion-img">
                    <img src={imageOne} alt=""></img>
                </div>
            </div>
        </div>
     );
}
 
export default Evelotion;