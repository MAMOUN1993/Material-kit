import bkground from "../../files/imag/bg-about-us.jpg"
const Landing = () => {
    return ( 
        <div className="landing-about">
                <img src={bkground} alt=""/>
                <div className="landing-info">
                    <h1>Work with an amazing design</h1>
                    <p>We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game</p>
                    <button>create account</button>
                    <div className="find">
                        <p>find us on</p>
                        <div className="find-icone">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-square-twitter"></i>
                            <i className="fa-brands fa-google-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Landing;