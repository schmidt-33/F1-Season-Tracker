import React, { useEffect, useState } from "react";
import axios from "axios";

function Teams(year) {
  const [Teams, setTeams] = useState([]);

  const teamStandingsCall = `https://ergast.com/api/f1/${year.year}/constructorstandings.json`;

  useEffect(() => {
    axios.get(teamStandingsCall)
      .then((res) => {
        if (res.data.MRData.StandingsTable.StandingsLists.length > 0) {
          setTeams(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
        } 
		else {
          setTeams([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [year]);

  if (Teams.length > 0) {
    return (
      <div className="standing-container">
        {Teams.map((team) => (
          <div
            key={team.position}
            className={`${team.Constructor.constructorId} standing-line`}
          >
            <div>{team.Constructor.name}</div>
            <div>{team.points}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>The season hasn not started yet </div>;
  }
}

export default Teams;
