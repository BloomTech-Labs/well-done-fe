import React from 'react'
import NavRight from './NavRight.js'
import NavLeft from './NavLeft.js'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavRight />
      <NavLeft />
    </nav>
  )
}

export default NavBar
