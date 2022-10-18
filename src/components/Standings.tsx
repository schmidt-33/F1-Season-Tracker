import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import Teams from './Teams';
import Drivers from './Drivers';
import '../css/standings.css'

function Standings() {
  const [year, setYear] = useState("2022");
  useEffect(()=>{},[year])
  const changeYearHandler = (event) => {
    setYear(event.target.value)
  }

  return (
    <div>
      <div className='standing-links'>
        <NavLink to='drivers'>Drivers</NavLink>
        <NavLink to='teams'>Teams</NavLink>
      </div>
      <select onChange={changeYearHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
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