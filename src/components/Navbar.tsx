import React from 'react'
import { NavLink, Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className='background'>
      <div className='navbar'>
        <h1>
          <Link to="/">F1 Season Tracker</Link>
        </h1>
        <div className='nav-links'>
            <NavLink to='/races'>Races</NavLink>
            <NavLink to='/standings'>Standings</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar