import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import RaceCard from './RaceCard'

//map for country codes to display flags


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
		<div>
			{
				Rounds.map(round => 
					<Link to={round.round} key={round.round}>
						<RaceCard round={round} />
					</Link>)
			}
		</div>
	)
}
export default Races