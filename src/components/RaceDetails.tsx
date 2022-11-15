import React from 'react'
import { useLocation } from 'react-router-dom'
import CompletedRace from './CompletedRace'
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
      <CompletedRace round={raceInfo.round}/>
    )
  }
  else {
    //make timestamp for when the race starts to countdown to 
    let raceDate = Date.parse(raceInfo.date + ' ' + raceInfo.time)
  
    return (
      // Need to send the timestamp for race in the Countdownn component
        <Countdown countdownTimeStamp={raceDate}/>
    )
  }

}

export default RaceDetails