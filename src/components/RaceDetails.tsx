import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function RaceDetails() {
  const [Race, setRace] = useState([])

  const params = useParams()
  const raceId = params.raceId

  useEffect(() => {
    axios.get(`https://ergast.com/api/f1/current/${raceId}.json`)
      .then(res => {
        setRace(res.data.MRData.RaceTable.Races)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  console.log(Race)
  return (
    <div> { Race.map(race => (
      race.raceName
    ))} </div>
  )
}

export default RaceDetails