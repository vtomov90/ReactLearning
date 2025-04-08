import React, {useState, useEffect} from "react"

function MyDigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setTime(new Date())
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    const formatTime = () => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        let meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        return `${hours}:${minutes}:${seconds}`;
    }

    function padZero(number){
        return number > 10 ? "0" : "";
    }

    

    return(
        <div>
            <h1>{formatTime()}</h1>
        </div>
    )
}
export default MyDigitalClock