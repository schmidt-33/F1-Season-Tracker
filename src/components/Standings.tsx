import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import Teams from './Teams';
import Drivers from './Drivers';
import '../css/standings.css'
import { currentYear } from '../Utils/SeasonYear';

function Standings() {
  const [year, setYear] = useState(currentYear.toString());
  useEffect(()=>{},[year])
  const changeYearHandler = (event) => {
    setYear(event.target.value)
  }
  
  //setup and populate an array for all seasons
  let seasons:Array<Number> = []; 
  for(let i = currentYear; i >= 1958; i--){
    seasons.push(i)
  }

  return (
    <div>
      <div className='standing-links'>
        <NavLink to='drivers'>Drivers</NavLink>
        <NavLink to='teams'>Teams</NavLink>
      </div>
      <select onChange={changeYearHandler}>
            {seasons.map(season => (
              <option key={season.toString()} value={season.toString()}>
                {season.toString()}
              </option>
            ))}

      </select>
      <Routes>
        <Route path="drivers" element={<Drivers year={year}/>} />
        <Route path="teams" element={<Teams year={year}/>} />
        <Route path="" element={<Navigate to="/standings/drivers" replace />} />
      </Routes>
    </div>
  )
}

export default Standings