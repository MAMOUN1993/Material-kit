import { useRef, useState } from "react";
import Nav from "./nav"
import Navone from "./navTow";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
    const navIcone = useRef()
    const [width , setwidth] = useState("false")
    const headchng = (t)=>{
            setwidth(t)
    }
    const [navvalue , setNavValue] = useState("false")
    const [ newValue , setNew] = useState(<i className="fa-solid fa-bars"></i>)
    const handler = ()=>{
        navvalue==="false" ? setNavValue("true") : setNavValue("false");
        navvalue==="true" ? setNew(<i className="fa-solid fa-bars"></i>) : setNew(<i className="fa-solid fa-x"></i>);
    }   
    return ( 
            <div className="header" hidatrib={navvalue} widthatt={width}>   
                <Link to="/"><p className="logo">Material Kit 2</p></Link>
                <div className="nav">
                    <Navone/>
                    <div className="button">free downlaod</div>
                    <div className="nav-icon"  ref={navIcone} onClick={()=>{handler()}}>
                        {newValue}
                    </div>
                </div>
                <Nav att={navvalue} headch={headchng}/>
                <Outlet/>
            </div>
    );
}

export default Header;