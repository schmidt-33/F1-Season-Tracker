import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getRemainingTime } from '../Utils/CountdownTimerUtils'
import Countdown from './Countdown'

function RaceDetails() {
  const location = useLocation()
  const raceInfo: any = location.state
  const today = new Date()
  let raceOver: boolean = false

  //check to see if the race has happened to show results
  if (new Date(raceInfo.date) < today) {
    raceOver = true
  }

  if (raceOver) {
    return (
      <div>{raceInfo.raceName} is over</div>
    )
  }
  else {
    let raceDate = Date.parse(raceInfo.date + ' ' + raceInfo.time)
  
    return (
      // Need to send the timestamp for race in the Countdownn component
      <div>{raceInfo.raceName} has not happened
        <Countdown countdownTimeStamp={raceDate}/>
      </div>

    )
  }

}

export default RaceDetails