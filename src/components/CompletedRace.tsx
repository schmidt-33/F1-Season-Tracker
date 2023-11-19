import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/standings.css'

function CompletedRace(prop) {
  let round = prop.round
  console.log(round)
  const [results, setResults] = useState([])

  useEffect(() => {
    axios.get(`https://ergast.com/api/f1/current/${round}/results.json`)
      .then(res => {

        setResults(res.data.MRData.RaceTable.Races[0].Results)
        console.log(round)


      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log(results)
  return (
    <div className='standing-container'>
      
        {
          results.map(result =>
            <div key={result.number} className={`${result.Constructor.constructorId} standing-line`}>
              <div>
                {result.Driver.givenName} {result.Driver.familyName}
              </div>
              <div>
                {result.points}
              </div>
            </div>
          )
        }
      </div>



  )
}

export default CompletedRace