import imageOne from "../../files/imag/execu/team-5.jpg" ; 
import imageToe from "../../files/imag/execu/bruce-mars.jpg" ; 
import imageThree from "../../files/imag/execu/ivana-squares.jpg" ; 
import imageFour from "../../files/imag/execu/ivana-square.jpg"
const Exect = () => {
    return ( 
        <div className="executice-background">
            <div className="container-two">
                <div className="exec-main">
                    <div className="exec-header">
                        <h3>The Executive Team</h3>
                        <p>There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill</p>
                    </div>
                    <div className="team-continer">
                        <div className="exec-team">
                            <div className="team-imge">
                                <img src={imageOne} alt=""></img>
                            </div>
                            <div className="team-info">
                                <h3>Emma Roberts</h3>
                                <h4>UI Designer</h4>
                                <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                            </div>
                        </div>
                        <div className="exec-team">
                            <div className="team-imge">
                                <img src={imageToe} alt=""></img>
                            </div>
                            <div className="team-info">
                                <h3>William Pearce</h3>
                                <h4>Boss</h4>
                                <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                            </div>
                        </div>
                        <div className="exec-team">
                            <div className="team-imge">
                                <img src={imageThree} alt=""></img>
                            </div>
                            <div className="team-info">
                                <h3>Ivana Flow</h3>
                                <h4>Athlete</h4>
                                <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                            </div>
                        </div>
                        <div className="exec-team">
                            <div className="team-imge">
                                <img src={imageFour} alt=""></img>
                            </div>
                            <div className="team-info">
                                <h3>Marquez Garcia</h3>
                                <h4>JS Developer</h4>
                                <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Exect;