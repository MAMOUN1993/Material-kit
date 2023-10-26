import matt from "../../files/imag/logo-ct-dark.png"
const Footer = () => {
    return ( 
        <div className="footer-main">
            <div className="footer-icone">
                <img src={matt}  alt=""></img>
                <h4>Material Kit 2</h4>
                <div className="soc-mid">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
            <div className="footer-discr">
                <p>Company</p>
                <ul>
                    <li><a href="https://www.creative-tim.com/presentation?_ga=2.193427565.1150603918.1697070259-1549769981.1697070259&_gl=1*36p74f*_ga*MTU0OTc2OTk4MS4xNjk3MDcwMjU5*_ga_LMRL06STSS*MTY5NzIzNzI4My4xNC4xLjE2OTcyMzc2MzAuNTcuMC4w">About Us</a></li>
                    <li><a href="https://www.creative-tim.com/templates/free?_ga=2.159154042.1150603918.1697070259-1549769981.1697070259&_gl=1*xcuslf*_ga*MTU0OTc2OTk4MS4xNjk3MDcwMjU5*_ga_LMRL06STSS*MTY5NzIzNzI4My4xNC4xLjE2OTcyMzc3NTIuNjAuMC4w">Freebies</a></li>
                    <li><a href="https://www.creative-tim.com/templates/premium?_ga=2.159154042.1150603918.1697070259-1549769981.1697070259&_gl=1*e07dma*_ga*MTU0OTc2OTk4MS4xNjk3MDcwMjU5*_ga_LMRL06STSS*MTY5NzIzNzI4My4xNC4xLjE2OTcyMzc3NjMuNDkuMC4w">Premium Tools</a></li>
                    <li><a href="https://www.creative-tim.com/blog?_ga=2.159154042.1150603918.1697070259-1549769981.1697070259&_gl=1*39yeca*_ga*MTU0OTc2OTk4MS4xNjk3MDcwMjU5*_ga_LMRL06STSS*MTY5NzIzNzI4My4xNC4xLjE2OTcyMzc3ODYuMjYuMC4w">Blog</a></li>
                </ul>
            </div>
            <div className="footer-discr">
                <p>Resources</p>
                <ul>
                    <li><a href="">Illustrations</a></li>
                    <li><a href="">Bits & Snippets</a></li>
                    <li><a href="">Affiliate Program</a></li>
                </ul>
            </div>
            <div className="footer-discr">
                <p>Help & Support</p>
                <ul>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Knowledge Center</a></li>
                    <li><a href="">Custom Development</a></li>
                    <li><a href="">Sponsorships</a></li>
                </ul>
            </div>
            <div className="footer-discr">
                <p>Legal</p>
                <ul>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Licenses (EULA)</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;