import React, {useState, useEffect, useRef} from "react"
function Stopwatch(){


    const [isRuning, setIsRuning] = useState(false);
    const [elipsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRuning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            })
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRuning])

    function start(){
        setIsRuning(true);
        startTimeRef.current = Date.now - elapsedTime;
    }
    function stop(){    
        setIsRuning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRuning(false)
    }
    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutess).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        miliseconds = String(miliseconds).padStart(2, "0");

        return  `${hours}:${minutes}:${seconds}${miliseconds}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start-button" onClick={start}>Start</button>
                <button className="stop-button" onClick={stop}>Stop</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default Stopwatch