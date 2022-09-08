import React from 'react'

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
  
  return (
    <div className='race-container' >
      <span className={`fi fi-${countryCodes.get(round.race.Circuit.Location.country)}`} />
      <div> {round.race.raceName} </div>
    </div>
  )
}

export default RaceCard