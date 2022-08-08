import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className='navbar'>
        <h1>F1 Paddock Tracker</h1>
        <div className='links'>
            <Link to='/races'>Races</Link>
            <Link to='/drivers'>Drivers</Link>
            <Link to='/teams'>Teams</Link>
        </div>
    </nav>
  )
}

export default Navbar