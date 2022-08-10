import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className='navbar'>
        <h1>F1 Paddock Tracker</h1>
        <div className='nav-links'>
            <NavLink to='/races'>Races</NavLink>
            <NavLink to='/standings/drivers'>Standings</NavLink>
        </div>
    </nav>
  )
}

export default Navbar