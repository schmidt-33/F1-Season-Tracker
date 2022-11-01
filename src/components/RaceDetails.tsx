import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

type RaceInfo = {
  season?: string,
  round?: string,
  url?: string,
  raceName?: string,
  Circuit?: {
    circuitId: string,
    url: string,
    circuitName: string,
    Location: {
      lat: string,
      long: string,
      locality: string,
      country: string
    }
  },
  date?: string,
  time?: string,
  FirstPractice?: {
    date: string,
    time: string
  },
  SecondPractice?: {
    date: string,
    time: string
  },
  ThirdPractice?: {
    date: string,
    time: string
  },
  Sprint?: {
    date: string,
    time: string
  },
  Qualifying?: {
    date: string,
    time: string
  }
}
function RaceDetails() {
  const params = useParams()
  const location = useLocation()
  const raceInfo:any = location.state
  const today = new Date()
  let raceOver: boolean = false

  useEffect(() => {
    console.log(raceInfo)
  }, [])


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
    return (
      <div>{raceInfo.raceName} has not happened</div>
    )
  }

}

export default RaceDetails