import {useEffect, useState } from "react";


function MyComponent(){
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handelResize);
        console.log("added");
        
        return(()=>{
            window.removeEventListener("resize",handelResize);
            console.log("removed");
            
        })
    },[])

    
    function handelResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(
        <>
            <p>window size: {width}X{height}</p>
        </>
    );

}


export default MyComponent
