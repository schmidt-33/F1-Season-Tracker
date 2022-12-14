import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/raceCard.css'
import RaceCard from './RaceCard'

function Races() {
	const [Rounds, setRounds] = useState([])

	useEffect(() => {
axios.get('https://ergast.com/api/f1/current.json')
		.then(res => {
			setRounds(res.data.MRData.RaceTable.Races)
		})
		.catch(err => {
			console.log(err)
		})
	}, [])
	

	return (
		<div className='race-container'>
			{
				Rounds.map(round =>
					<Link to={round.round} key={round.round} state={round}>
						<RaceCard race={round}/>
					</Link>)
			}
		</div>
	)
}
export default Races