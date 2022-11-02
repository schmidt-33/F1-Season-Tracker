import React, { useEffect, useState } from 'react'
import { getRemainingTime } from '../Utils/CountdownTimerUtils'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

function Countdown({countdownTimeStamp}) {

    const [RemainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(()=> {
            updateRemainingTime(countdownTimeStamp)
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimeStamp])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTime(countdown));
    }

    return (
        <div>
            <span>{RemainingTime.days}</span>
            <span>days</span>
            <span>{RemainingTime.hours}</span>
            <span>hours</span>
            <span>{RemainingTime.minutes}</span>
            <span>minutes</span>
            <span>{RemainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    )
}

export default Countdown

