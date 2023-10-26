import aplle from "../../files/imag/logo-apple.f9c2682e.svg"
import facebook from "../../files/imag/logo-facebook.106d2ac0.svg"
import nasa from "../../files/imag/logo-nasa.c5d11f88.svg"
import vodafone from "../../files/imag/logo-vodafone.b3e8486c.svg"
import ocean from "../../files/imag/logo-digitalocean.a1f147b0.svg"
const Trust = () => {
    return ( 
        <div className="trust-main">
            <div className="trust-header">
                <h1>Trusted by over</h1>
                <h1>1,679,477+ web developers</h1>
                <p>Many Fortune 500 companies, startups, universities and governmental institutions love Creative Tim's products.</p>
            </div>
            <div className="trust-container">
                <div className="trusr-div">
                    <div className="trust-div">
                        <h3>Nick Willever</h3>
                        <div className="trust-icone">
                            <i className="fa-regular fa-clock"></i>
                            <p>1 day ago</p>
                        </div>
                    </div>
                    <p>"This is an excellent product, the documentation is excellent and helped me get things done more efficiently."</p>
                    <div className="trust-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className="trusr-div">
                    <div className="trust-div">
                        <h3>Shailesh Kushwaha</h3>
                        <div className="trust-icone">
                            <i className="fa-regular fa-clock"></i>
                            <p>1 week ago</p>
                        </div>
                    </div>
                    <p>"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"</p>
                    <div className="trust-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className="trusr-div">
                    <div className="trust-div">
                        <h3>Samuel Kamuli</h3>
                        <div className="trust-icone">
                            <i className="fa-regular fa-clock"></i>
                            <p>3 weeks ago</p>
                        </div>
                    </div>
                    <p>"Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!.</p>
                    <div className="trust-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="trust-mark">
                <div className="trust-image">
                    <img src={aplle} alt="s"></img>
                </div>
                <div className="trust-image">
                    <img src={facebook} alt="s"></img>
                </div>
                <div className="trust-image">
                    <img src={nasa} alt="s"></img>
                </div>
                <div className="trust-image">
                    <img src={vodafone} alt="s"></img>
                </div>
                <div className="trust-image">
                    <img src={ocean} alt="s"></img>
                </div>
            </div>
         </div> 
    );
}
 
export default Trust;