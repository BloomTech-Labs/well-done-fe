import React from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
const NavRight = () => {
  return (
    <div className='nav-right'>
      <NavLink className="margin-left" to='/dashboard'>Dashboard</NavLink>
      <NavLink className="margin-left" to='/monitors'>Monitors</NavLink>
      <NavLink className="margin-left margin-right" to='/organization'>Organizations</NavLink>
      <div className="margin-left">💧</div>
    </div>
  )
}

export default NavRight
