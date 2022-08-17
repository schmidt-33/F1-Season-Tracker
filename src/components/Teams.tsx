import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Teams() {
	const [Teams, setTeams] = useState([])

	useEffect(() => {
		axios.get('https://ergast.com/api/f1/current/constructorstandings.json')
			.then(res => {
				console.log(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
				setTeams(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<div className="standing-container">
			{
				Teams.map(team =>
					<div key={team.position} className={`${team.Constructor.constructorId} standing-line`}>
						<div>
							{team.Constructor.name}
						</div>
						<div>
							{team.points}
						</div>
					</div>
				)
			}
		</div>
	)
}

export default Teams

