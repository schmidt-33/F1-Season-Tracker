import React from 'react'
import { useParams } from 'react-router-dom'

function RaceDetails() {
    const params = useParams()
    const raceId = params.raceId

  return (
    <div>Details for Race {raceId}</div>
  )
}

export default RaceDetails