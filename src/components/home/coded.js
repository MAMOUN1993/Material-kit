import image1 from "../../files/imag/coded page/about-us.jpg"
import image2 from "../../files/imag/coded page/contact.jpg"
import image3 from "../../files/imag/coded page/signin-basic.jpg"
import image4 from "../../files/imag/coded page/author.jpg"
let inputs =[
    {   
        Title : "Presentation Pages for Company, Landing Pages, Blogs and Support",
        para : "These is just a small selection of the multiple possibitilies you have. Focus on the business, not on the design."
    },
    [
        {
            image : image1,
            h3 : "About us page",
            id : 1
        },
        {
            image : image2,
            h3 : "contact us page",
            id : 2
        },
        {
            image : image3,
            h3 : "sign in page",
            id : 3
        },
        {
            image : image4,
            h3 : "author",
            id : 4
        }
        
    ]];
const Coded = () => {
    function View(s){
        return      <div>
                        <div className='image'>
                        <img className='imag' src={s.coll.image} alt='asas'></img>
                        </div>
                        <div className='para-img'>
                        <h4>{s.coll.h3}</h4>
                        </div>
                    </div>
    }
    return ( 
        <div className="coded-main">
            <div className="coded-header">
                <h5>
                    BOOST CREATIVITY
                </h5>
                <h1>
                    With our coded pages
                </h1>
                <p>
                The easiest way to get started is to use one of ourpre-built example pages.
                </p>
            </div>
            {
                <div className="coll-compo-main">
                <div className='coll-image'>
                    {inputs[1].map((s)=> <View key={s.id} coll={s}/>)}
                </div>
                <div className='fixed-hedaer'>
                <h1>{inputs[0].Title}</h1>
                <p>{inputs[0].para}</p>
                </div>
            </div>
            }
        </div>
    );
}
export default Coded;
