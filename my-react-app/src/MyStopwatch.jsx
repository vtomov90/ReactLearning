import React, {useState, useEffect, useRef} from 'react'
function MyStopwatch(){

    const [isRuning, setIsRunning] = useState(false);
    const [elipsedTime, setElipsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
       if(isRuning){
        intervalIdRef.current = setInterval(() => {
            setElipsedTime(Date.now() - startTimeRef)
        }, 100)
       }
       return () => {
        clearInterval(intervalIdRef);
       }
    }, [isRuning])

    function start(){
        isRuning(true);
        startTimeRef = Date.now() - elipsedTime;
    }
    function stop(){
        isRuning(false)
    }
    function reset(){
        setElipsedTime(0)
        isRuning(false)

    }
    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }


    return(
        <div>
            <div>{formatTime()}</div>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default MyStopwatch