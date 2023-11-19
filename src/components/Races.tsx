import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/raceCard.css'
import RaceCard from './RaceCard'
import { currentYearSchedule } from '../Utils/SeasonYear';

function Races() {
	const [year, setYear] = useState(currentYearSchedule.toString())
	const [Rounds, setRounds] = useState([])

	useEffect(() => {
		axios.get(`https://ergast.com/api/f1/${year}.json`)
		.then(res => {
			setRounds(res.data.MRData.RaceTable.Races)
		})
		.catch(err => {
			console.log(err)
		})
	}, [year])

	//setup and populate an array for all seasons
	let seasons:Array<Number> = []; 
	for(let i = currentYearSchedule; i >= 1958; i--){
	  seasons.push(i)
	}
	
	const changeYearHandler = (event) => {
		setYear(event.target.value)
	  }

	return (
		<div >
			<select onChange={changeYearHandler}>
            {seasons.map(season => (
              <option key={season.toString()} value={season.toString()}>
                {season.toString()}
              </option>
            ))}

      </select>
	  <div className='race-container'>

		{
				Rounds.map(round =>
					<Link to={round.round} key={round.round} state={round}>
						<RaceCard race={round}/>
					</Link>)
			}
	  </div>
			
		</div>
	)
}
export default Races