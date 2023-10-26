import imgOne from "../../files/imag/examples/testimonial-6-2.jpg"
import imgTow from "../../files/imag/examples/testimonial-6-3.jpg"
import imgThree from "../../files/imag/examples/blog-9-4.jpg"
import imgFour from "../../files/imag/examples/blog2.jpg"
const Blogs = () => {
    return ( 
        <div className="blogs-container">
                <div className="blogs-header">
                    <h2>
                        Check my latest blogposts
                    </h2>
                </div>
                <div className="blogs-check">
                    <div>
                        <div>
                            <img src={imgOne} alt=""></img>
                        </div>
                        <div className="blogs-disc">
                            <h3>
                                Rover raised $65 million
                            </h3>
                            <p>
                                Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ...
                            </p>
                        </div>
                        <div>
                            <p>read more</p>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={imgTow} alt=""></img>
                        </div>
                        <div className="blogs-disc">
                            <h3>
                                MateLabs machine learning
                            </h3>
                            <p>
                                If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...
                            </p>
                        </div>
                        <div>
                            <p>read more</p>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={imgThree} alt=""></img>
                        </div>
                        <div className="blogs-disc">
                            <h3>
                                MateLabs machine learning
                            </h3>
                            <p>
                                If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...
                            </p>
                        </div>
                        <div>
                            <p>read more</p>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={imgFour} alt=""></img>
                        </div>
                        <div className="blogs-disc">
                            <h3>
                            Flexible work hours
                            </h3>
                            <p>
                                Rather than worrying about switching offices every couple years, you stay in the same place.                           
                            </p>
                        </div>
                        <div>
                            <p>read more</p>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Blogs;