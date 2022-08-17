import React, { useEffect, useState } from 'react'
import axios from 'axios'

//map for country codes to display flags
let countryCodes = new Map<string, string>([
	['Bahrain', 'bh'],
	['Saudi Arabia', 'sa'],
	['Australia', 'au'],
	['Italy', 'it'],
	['USA', 'us'],
	['Spain', 'es'],
	['Monaco', 'mc'],
	['Azerbaijan', 'az'],
	['Canada', 'ca'],
	['UK', 'gb'],
	['Austria', 'at'],
	['France', 'fr'],
	['Hungary', 'hu'],
	['Belgium', 'be'],
	['Netherlands', 'nl'],
	['Singapore', 'sg'],
	['Japan', 'jp'],
	['Mexico', 'mx'],
	['Brazil', 'br'],
	['UAE', 'ae']
])

function Races() {
	const [Rounds, setRounds] = useState([])

	useEffect(() => {
		axios.get('https://ergast.com/api/f1/current.json')
			.then(res => {
				console.log(res.data.MRData.RaceTable.Races)
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
					<div className='race-container'>
						<span className={`fi fi-${countryCodes.get(round.Circuit.Location.country)}`}/><div key={round.round}> {round.raceName} </div>
					</div>)
			}
		</div>
	)
}
export default Races