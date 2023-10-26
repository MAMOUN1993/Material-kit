import { useEffect, useRef, useState } from "react";
const One = (props) => {
    const condValue = useRef("false")
    const [number , setOne] = useState(0)
    let countOne = 0 ;
    useEffect (()=>{
        if(condValue.current === "false"){
            const timer = setInterval(()=>{
                if(countOne !== props.num){
                    setOne((number)=>number+1)
                    countOne++;
                }
                if(countOne === props.num){
                    clearInterval(timer)
                }
            }, 10);
            condValue.current = "true";
        }
    });
    return ( 
        <div>
            <h2>
                {number}{props.plus}
            </h2>
            <h4>
                {props.textOne}
            </h4>
            <p>
                {props.textTow}
            </p>
        </div>
    );
}

export default One;