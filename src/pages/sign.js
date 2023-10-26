
import { useState } from "react";
import Header from "../components/reused components/Header"
const Sign = () => {
    const [attrValue , setValue] =useState("false");
    const [atrValueOne , setOne] = useState("false");
    const [atrValueTwo , setTow] = useState("false");
    return ( 
    <>
    <Header/>
    
    <div className="sign-container">
        <div>
            <div>
                <h2>sign in</h2>
                <div className="sign-icne">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-google"></i>
                </div>
            </div>
            <div className="input">
                <p att={attrValue}>email</p>
                <input att={attrValue} className="input-space" type="email"
                onBlur={()=>{
                    setValue("false")
                }}
                onFocus={()=>{
                    setValue("true")
                }}
                ></input>
            </div>
            <div className="input">
                <p att={atrValueOne}>password</p>
                <input att={atrValueOne} className="input-space" type="password"
                onBlur={()=>{
                    setOne("false")
                }}
                onFocus={()=>{
                    setOne("true")
                }}
                ></input>
            </div>
            <div className="remember" onClick={()=>{
                if(atrValueTwo=== "false"){
                    setTow("true")
                }else{
                    setTow("false")
                }
            }}>
                <p>
                    remember me
                </p>
                <div attrs={atrValueTwo} className="remember-button"></div>
            </div>
            <button>sign in</button>
            <p>
                Don't have an account?
                <span>Sign up</span>
            </p>
        </div>
        <div>
            <div>
            © 2023, made with<i className="fa-solid fa-heart"></i> by Creative Tim for a better web.
            </div>
            <ul>
                <li> 
                    <a>creative tim</a>
                </li>
                <li> 
                    <a>About us</a>
                </li>
                <li> 
                    <a>blog</a>
                </li>
                <li> 
                    <a>license</a>
                </li>
            </ul>
        </div>
    </div>
    </>
     );
}
 
export default Sign;