import { useEffect, useRef } from "react";
import { useState } from "react";

function StopWatch(){

    const [isRunning,setIsRunning] = useState(false);
    const [elapsTime, setElapsTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalRef.current =  setInterval(
                ()=>{setElapsTime(Date.now() - startTimeRef.current)
                },10);

        }

        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[isRunning])
    
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapsTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        let hours = Math.floor(elapsTime  / (1000*60*60));
        let min = Math.floor(elapsTime  / (1000*60)%60);
        let sec = Math.floor(elapsTime  / (1000)%60);
        let milisec = Math.floor(elapsTime % 1000 / 10);

        return `${min}:${sec}:${milisec}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start-btn" onClick={start}>Start</button>
                <button className="stop-btn" onClick={stop}>Stop</button>
                <button className="reset-btn" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default StopWatch