import React from 'react'
import '../css/raceCard.css'

//flag codes for all countries on the calendar
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


function RaceCard(round) {
	if (round.race.ThirdPractice) {
		return (
			<div className='race-card' >
				<span className={`fi fi-${countryCodes.get(round.race.Circuit.Location.country)}`} />
				<div> {round.race.raceName} </div>
				<div> FP1: {round.race.FirstPractice.time}</div>
				<div> FP2: {round.race.SecondPractice.time}</div>
				<div> FP3: {round.race.ThirdPractice.time}</div>
				<div> Q: {round.race.Qualifying.time} </div>
				<div> Race: {round.race.time} </div>
			</div>
		)
	}

	if (round.race.Sprint) {
		return (
			<div className='race-card' >
				<span className={`fi fi-${countryCodes.get(round.race.Circuit.Location.country)}`} />
				<div> {round.race.raceName} </div>
				<div> FP1: {round.race.FirstPractice.time}</div>
				<div> FP2: {round.race.SecondPractice.time}</div>
				<div> Sprint: {round.race.Sprint.time}</div>
				<div> Q: {round.race.Qualifying.time} </div>
				<div> Race: {round.race.time} </div>
			</div>
		)
	}

}

export default RaceCard