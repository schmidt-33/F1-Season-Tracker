import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Teams(year) {
	const [Teams, setTeams] = useState([])

	const teamStandingsCall = 'https://ergast.com/api/f1/' + year.year + '/constructorstandings.json'
	console.log(teamStandingsCall)
	axios.get(teamStandingsCall)
		.then(res => {
			setTeams(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
		})
		.catch(err => {
			console.log(err)
		})


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

