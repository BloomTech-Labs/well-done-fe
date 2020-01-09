import React from 'react'
import './NavBar.scss'
import DropletDroplet from '../../icons/DropletDroplet.svg'

const NavLeft = () => {
  return <div className='nav-left'>  
  <span className="logo-text">WellDone</span> <img
  className="logo"
  src={DropletDroplet}
  alt="Well Done logo"
/></div>
}

export default NavLeft
