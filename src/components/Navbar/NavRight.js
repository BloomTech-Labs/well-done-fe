import React from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
const NavRight = () => {
  return (
    <div className='nav-right'>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <NavLink to='/monitors'>Monitors</NavLink>
      <NavLink to='/organization'>Organizations</NavLink>
    </div>
  )
}

export default NavRight
