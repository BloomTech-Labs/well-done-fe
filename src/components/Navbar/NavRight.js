import React, { useState } from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown.js'

const NavRight = () => {
  const [displayDropdown, setdisplayDropdown] = useState(false)

  return (
    <div className='nav-right'>
      <NavLink className='margin-left' to='/dashboard'>
        Dashboard
      </NavLink>
      <NavLink className='margin-left' to='/overview'>
        Monitors
      </NavLink>
      <NavLink className='margin-left' to='/organization'>
        Organizations
      </NavLink>
      <div
        className='margin-left-droplet margin-right'
        onClick={() => setdisplayDropdown(!displayDropdown)}
      >
        💧
      </div>
      {displayDropdown && <Dropdown setterFunction={setdisplayDropdown} />}
    </div>
  )
}

export default NavRight
