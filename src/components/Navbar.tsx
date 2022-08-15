import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className='background'>
      <div className='navbar'>
        <h1>F1 Paddock Tracker</h1>
        <div className='nav-links'>
            <NavLink to='/races'>Races</NavLink>
            <NavLink to='/standings/'>Standings</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar