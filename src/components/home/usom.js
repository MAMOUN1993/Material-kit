import bootstrab from "../../files/imag/bootstrap5.jpg"
import demos from "../../files/imag/icon-tailwind.jpg"
import vue from "../../files/imag/vue.jpg"
import angular from "../../files/imag/angular.jpg"
import react from "../../files/imag/react.jpg"
import sketch from "../../files/imag/sketch.jpg"
const awesome = () => {
    return ( 
        <div className="awesome-main">
            <div className="awesome-container">
                <img  src="https://demos.creative-tim.com/material-kit-react/static/media/waves-white.7e7579c6.svg" alt=""></img>
                <h3>Do you love this awesomeUI Kit for ReactJS & MUI?</h3>
                <p>Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in HTML. Start a new project or give an old Bootstrap project a new look!</p>
                <button>Download now</button>
            </div>
            <h3>Available on these technologies</h3>
            <div className="libar-icone">
                <img src={bootstrab} alt=""></img>
                <img src={demos} alt=""></img>
                <img src={vue} alt=""></img>
                <img src={angular} alt=""></img>
                <img src={react} alt=""></img>
                <img src={sketch} alt=""></img>
            </div>
        </div>
     );
}
 
export default awesome;