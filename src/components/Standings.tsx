import React from 'react'
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import Teams from './Teams';
import Drivers from './Drivers';
import '../css/standings.css'
function Standings() {
  return (
    <div>
      <div className='standing-links'>
        <NavLink to='drivers'>Drivers</NavLink>
        <NavLink to='teams'>Teams</NavLink>
      </div>
      <Routes>
        <Route path="drivers" element={<Drivers />} />
        <Route path="teams" element={<Teams />} />
        <Route path="" element={<Navigate to="/standings/drivers" replace />} />
      </Routes>
    </div>
  )
}

export default Standings