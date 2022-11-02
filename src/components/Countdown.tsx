import React, { useEffect, useState } from 'react'
import { getRemainingTime } from '../Utils/CountdownTimerUtils'
import "../css/countdown.css"

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

function Countdown({ countdownTimeStamp }) {

    const [RemainingTime, setRemainingTime] = useState(getRemainingTime(countdownTimeStamp));

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimeStamp)
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimeStamp])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTime(countdown));
    }

    return (
        <div className='countdown-container'>
            <div className="time-frame">
                <span className='digit'>{RemainingTime.days}</span>
                <span>days</span>
            </div>
            <div className="time-frame">
                <span className='digit'>{RemainingTime.hours}</span>
                <span>hours</span>
            </div>
            <div className="time-frame">
                <span className='digit'>{RemainingTime.minutes}</span>
                <span>minutes</span>
            </div>
            <div className="time-frame">
                <span className='digit'>{RemainingTime.seconds}</span>
                <span>seconds</span>
            </div>
        </div>
    )
}

export default Countdown

