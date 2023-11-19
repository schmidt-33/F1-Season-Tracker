import React from 'react'
import '../css/raceCard.css'

//flag codes for all countries on the calendar
let countryCodes = new Map<string, string>([
	['Bahrain', 'bh'],
	['Saudi Arabia', 'sa'],
	['Australia', 'au'],
	['Italy', 'it'],
	['USA', 'us'],
	['United States', 'us'],
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
	['Qatar', 'qa'],
	['Mexico', 'mx'],
	['Brazil', 'br'],
	['UAE', 'ae']
])


function RaceCard(round) {

	const raceName = round.race.raceName
	const todayDate = new Date()

	//convert times from UTC to respective time zone
	const fp1Time = new Date(round.race.FirstPractice.date + " " + round.race.FirstPractice.time)
	const fp2Time = new Date(round.race.SecondPractice.date + " " + round.race.SecondPractice.time)
	const qualiTime = new Date(round.race.Qualifying.date + " " + round.race.Qualifying.time)
	const raceTime = new Date(round.race.date + " " + round.race.time)
	//fp3 and sprint times have to be done in there respectibe if statements as not every race has them

	const weekend = round.race.date

	//retrun for a race with FP3
	if (round.race.ThirdPractice) {

		const fp3Time = new Date(round.race.ThirdPractice.date + " " + round.race.ThirdPractice.time)

		return (
			<div className='race-card' >
				<span className={`fi fi-${countryCodes.get(round.race.Circuit.Location.country)}`} />
				<div> {raceName} </div>
				<div> {weekend}</div>
				<div> <span className='session-name'>FP1: </span> {todayDate < fp1Time ? fp1Time.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}) : <span>&#x2705;</span> }</div>
				<div> <span className='session-name'>FP2: </span> {todayDate < fp2Time ? fp2Time.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}) : <span>&#x2705;</span>}</div>
				<div> <span className='session-name'>FP3: </span> {todayDate < fp3Time ? fp3Time.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}) : <span>&#x2705;</span>}</div>
				<div> <span className='session-name'>Q: </span> {todayDate < qualiTime ? qualiTime.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}) : <span>&#x2705;</span>} </div>
				<div> <span className='session-name'>Race: </span> {todayDate < raceTime ? raceTime.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}) : <span>&#x2705;</span>} </div>
			</div>
		)
	}

	//return for a race with a sprint
	if (round.race.Sprint) {

		const sprintTime = new Date(round.race.Sprint.date + " " + round.race.Sprint.time)

		return (
			<div className='race-card' >
				<span className={`fi fi-${countryCodes.get(round.race.Circuit.Location.country)}`} />
				<div> {raceName} </div>
				<div> <span className='session-name'>FP1: </span> {todayDate < fp1Time ? fp1Time.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}) : <span>&#x2705;</span>}</div>
				<div> <span className='session-name'>FP2: </span> {todayDate < fp2Time ? fp2Time.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}) : <span>&#x2705;</span>}</div>
				<div> <span className='session-name'>Sprint: </span> {todayDate < sprintTime ? sprintTime.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}) : <span>&#x2705;</span>}</div>
				<div> <span className='session-name'>Q: </span> {todayDate < qualiTime ? qualiTime.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}) : <span>&#x2705;</span>} </div>
				<div> <span className='session-name'>Race: </span> {todayDate < raceTime ? raceTime.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}) : <span>&#x2705;</span>} </div>
			</div>
		)
	}

}

export default RaceCard