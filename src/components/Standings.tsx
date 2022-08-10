import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Teams from './Teams';
import Drivers from './Drivers';

function Standings() {
  return (
    <div>
    <div className='standing-links'>
         <Link to='drivers'>Drivers</Link>
        <Link to='teams'>Teams</Link>
    </div>
    <Routes>
        <Route path="drivers" element={<Drivers />} />
        <Route path="teams" element={<Teams />} />
    </Routes>
    </div>
  )
}

export default Standings