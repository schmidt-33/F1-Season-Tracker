import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Teams() {
	const [Teams, setTeams] = useState([])

	useEffect(() => {
		axios.get('http://ergast.com/api/f1/current/constructors.json')
			.then(res => {
				console.log(res.data.MRData.ConstructorTable.Constructors)
				setTeams(res.data.MRData.ConstructorTable.Constructors)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<div>
			{
				Teams.map(team => <div key={team.constructorId}> {team.name} </div>)
			}
		</div>
	)
}

export default Teams