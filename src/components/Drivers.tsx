import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Drivers() {
	const [Drivers, setDrivers] = useState([])
	const team = 'teamcolor'

	//get the information of the driver standings and set it to Drivers array
	useEffect(() => {
		axios.get('http://ergast.com/api/f1/current/driverstandings.json')
			.then(res => {
				console.log(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
				setDrivers((res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings))
				
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	console.log(Drivers)
	return (
			<div className="standing-container">
				{
					Drivers.map(driver =>
						<div key={driver.position} className={`${driver.Constructors[0].constructorId} standing-line`}>
							<div>
								{driver.Driver.givenName} {driver.Driver.familyName} 
							</div>
							<div>
								{driver.points}
							</div>
						</div>
					)
				}
			</div>
	)
}

// //convert team names with _ to - for class name usage
// function nameConversion(teamName) {
// 	let team = teamName

// 	for(let i = 0; i < team; i++){
// 		if(team[i] == "_")
// 			team[i] = "-"
// 		return team
// 	}
// }

export default Drivers