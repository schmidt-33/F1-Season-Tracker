import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Drivers() {
	const [Drivers, setDrivers] = useState([])

	useEffect(() => {
		axios.get('http://ergast.com/api/f1/current/drivers.json')
			.then(res => {
				console.log(res.data.MRData.DriverTable.Drivers)
				setDrivers(res.data.MRData.DriverTable.Drivers)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<div>
			{
				Drivers.map(driver => <div key={driver.driverId}> {driver.givenName} {driver.familyName} </div>)
			}
		</div>
	)
}

export default Drivers