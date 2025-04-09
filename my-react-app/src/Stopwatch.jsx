import React, {useState, useEffect, useRef} from "react"
function Stopwatch(){


    const [isRuning, setIsRuning] = useState(false);
    const [elipsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isRuning])

    function start(){

    }
    function stop(){

    }
    function reset(){

    }
    function formatTime(){
        return = `00:00:00`
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