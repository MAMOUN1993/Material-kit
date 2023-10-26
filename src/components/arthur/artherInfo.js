import imageOne from "../../files/imag/execu/bruce-mars.jpg" ;
const Info = () => {
    return ( 
        <div className="info-container">
            <div className="info-img">
                <img src={imageOne} alt=""></img>
            </div>
            <div className="micheal-continer">
                <div>
                    <div className="micheal-info">
                        <h2>Michael Roven</h2>
                        <div>
                            <p>
                                <span>323 </span>Posts
                            </p>
                            <p>
                                <span>3.5k </span>Followers
                            </p>
                            <p>
                                <span>260 </span>following
                            </p>
                        </div>
                        
                    </div>
                    <button>follow</button>
                </div>
                <div className="micheal-decisions">
                    <h4>
                        Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality). Choose the path that leaves you more equanimous.
                    </h4>
                </div>               
                <div className="more">
                    <p>more about me</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
     );
}
 
export default Info;