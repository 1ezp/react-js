import { useRef } from "react";
import { useEffect } from "react";


function Ref(){
    const inputRef = useRef(null);

    useEffect(()=>{
        console.log("Rendered");
        
    })
    
    const handelClick = ()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "blue";
        
    }
    return(
        <div>

            <button onClick={handelClick}>
                Click me!
            </button>
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default Ref