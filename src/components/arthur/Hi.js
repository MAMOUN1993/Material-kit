import { useState } from "react";
import imageOne from "../../files/imag/examples/blog2.jpg"
const Hi = () => {
    const [attOne , setOne] = useState("false");
    const [attTow , setTow] = useState("false");
    const [attThee , setThree] = useState("false");
    return ( 
        <div className="Hi-container">
            <div className="Hi-info">
                <div className="hi-bh">
                    <img src={imageOne} alt=""></img>
                </div>
                <h2>
                    Contact Information
                </h2>
                <p>
                    Fill up the form and our Team will get back to you within 24 hours.
                </p>
                <ul>
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        <p>
                            (+40) 772 100 200
                        </p>
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope"></i>
                        <p>
                            hello@creative-tim.com
                        </p>
                    </li>
                    <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>
                            Dyonisie Wolf Bucharest, RO 010458
                        </p>
                    </li>
                </ul>
                <div>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-solid fa-earth-americas"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                
            </div>
            <div className="Hi-form">
                <div className="form-header">
                    <h1>Say Hi!</h1>
                    <p>We'd like to talk with you.</p>
                </div>
                <div className="name" attr={attOne}>
                    <p attr={attOne}>My name is</p>
                    <input  type="text" placeholder="Full Name" 
                    onFocus={()=>{
                        setOne("true");
                    }}
                    onBlur={()=>{
                        setOne("false")
                    }}
                    ></input>
                </div>
                <div className="look" attr={attTow}>
                    <p attr={attTow}>I'm looking for</p>
                    <input type="text" placeholder="What you love" 
                    onFocus={()=>{
                        setTow("true");
                    }}
                    onBlur={()=>{
                        setTow("false")
                    }}
                    ></input>
                </div>
                <div className="your" attr={attThee}>
                    <p attr={attThee}>Your message</p>
                    <input type="textarea" placeholder="I want to say that..."
                    onFocus={()=>{
                        setThree("true");
                    }}
                    onBlur={()=>{
                        setThree("false")
                    }}
                    ></input>
                </div>
                <button>send message</button>
            </div>
        </div>
     );
}
 
export default Hi;