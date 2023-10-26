import { useState } from "react";
import Header from "../components/reused components/Header"
import Footer from "../components/reused components/footer";

const Contact = () => {
    const [attrOne , setOne] = useState("false");
    const [attrTow , setTow] = useState("false");
    const [attrThree , setThree] = useState("false");
    return ( 
        <>
        <Header/>
            
                <div className="contact-main">
                    <div className="contcat-imge">
                        <img src="https://demos.creative-tim.com/material-kit-react/static/media/illustration-reset.c5f36c0c.jpg" alt=""></img>
                    </div>
                    <div className="contcat-indo">
                        <div>
                            <div className="contact-header">
                                <h2>Contact us</h2>
                            </div>
                            <p>For further questions, including partnership opportunities, please email hello@creative-tim.com or contact using our contact form.</p>
                            <div className="contact-fill">
                                <div attr={attrOne}>
                                    <p attr={attrOne}>Full Name</p>
                                    <input 
                                    onFocus={()=>{
                                        setOne("true")
                                    }}
                                    onBlur={()=>{
                                        setOne("false")
                                    }}
                                     className="text" type="text"></input>
                                </div>
                                <div attr={attrTow}>
                                    <p attr={attrTow}>Email</p>
                                    <input
                                    onFocus={()=>{
                                        setTow("true")
                                    }}
                                    onBlur={()=>{
                                        setTow("false")
                                    }}
                                    className="email" type="email"></input>
                                </div>
                            </div>
                            <div attr={attrThree}>
                                <p attr={attrThree}>What can we help you?</p>
                               
                                <textarea onFocus={()=>{
                                    setThree("true")
                                }}
                                onBlur={()=>{
                                    setThree("false")
                                }} placeholder="Describe your problem in at least 250 characters"></textarea>
                            </div>
                            <button>send message</button>
                        </div>
                    </div>
                </div>
            
        <Footer/>
        </>
     );
}
 
export default Contact;