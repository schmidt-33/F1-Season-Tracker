import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Drivers() {
	const [Drivers, setDrivers] = useState([])
	const team = 'teamcolor'

	//get the information of the driver standings and set it to Drivers array
	axios.get('https://ergast.com/api/f1/current/driverstandings.json')
		.then(res => {
			setDrivers(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
		})
		.catch(err => {
			console.log(err)
		})


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

export default Drivers