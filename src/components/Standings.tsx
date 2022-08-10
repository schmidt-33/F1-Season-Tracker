import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Teams from './Teams';
import Drivers from './Drivers';

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
    </Routes>
    </div>
  )
}

export default Standings