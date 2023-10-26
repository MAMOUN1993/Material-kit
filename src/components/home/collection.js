import dataInf from '../../files/data/data'
import navigtion from '../../files/data/navigtion'
import Collcompo from '../reused components/collcompmnents';
import inputs from '../../files/data/inputs';
import attin from '../../files/data/attemtion';
import element from '../../files/data/element';
const Coll = () => {
    return ( 
        <div className="col-main">
            <div className="col-header">
                <h5>
                    INFINITE COMBINATIONS
                </h5>
                <h1>
                    Huge collection of sections
                </h1>
                <p>
                    We have created multiple options for you to put together and customise into pixel perfect pages.
                </p>
            </div>
            <Collcompo data={dataInf}/>
            <Collcompo data={navigtion}/>
            <Collcompo data={inputs}/>
            <Collcompo data={attin}/>
            <Collcompo data={element}/>
        </div>
    );
}
export default Coll;