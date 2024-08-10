import { useEffect } from "react";
import { useState } from "react"


function DigitalClock(){

    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000)

        return ()=>{
            clearInterval(intervalId)
        }
    },[]);

    const formatTime = ()=>{
        return `${time.getHours()%12||12}:${time.getMinutes()}:${time.getSeconds()} ${time.getHours()>12?"PM":"AM"}`
    }

    return(<>
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>

        </div>
    </>)
}
export default DigitalClock
