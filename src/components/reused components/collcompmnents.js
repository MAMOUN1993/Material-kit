
const Collcompo = (props) => {
    function View(s){
        return      <div>
                        <div className='image' attir={`${s.coll.lockValue}`}>
                            {s.coll.lockValue ? 
                                <div className='lock' >
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            :""}
                        <img className='imag' src={s.coll.image} alt='asas'></img>
                        </div>
                        <div className='para-img'>
                        <h4>{s.coll.h3}</h4>
                        <p>{s.coll.paraTow}</p>
                        </div>
                    </div>
    }
    return ( 
        <>
            <div className="coll-compo-main">
                <div className='fixed-hedaer'>
                <h1>{props.data[0].Title}</h1>
                <p>{props.data[0].para}</p>
                </div>
                <div className='coll-image'>
                    {props.data[1].map((s)=> <View key={s.id} coll={s}/>)}
                </div>
            </div>
        </>
    );
}
export default Collcompo;