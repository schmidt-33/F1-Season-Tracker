import React, { useEffect, useState} from 'react'
import axios from 'axios'

function Races() {
	const [Rounds, setRounds] = useState([])
	
	useEffect(() => {
		axios.get('http://ergast.com/api/f1/current.json')
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
					Rounds.map(round => <div key={round.round}> {round.raceName} </div>)
				}
			
		</div>
    )
  

  
}
export default Races

	// axios.get('https://jsonplaceholder.typicode.com/posts')
	// 		.then(response => {
    //     		//const races = response.data races.MRData.RaceTable.Races
	// 			console.log(response)
				
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 		})
  	// }
	
	
	//let rounds:any = []
	// rounds.push(races.MRData.RaceTable.Races)
	// 			rounds.map((round: any) => {
	// 				console.log(rounds)
	// 			})http://ergast.com/api/f1/current.json
