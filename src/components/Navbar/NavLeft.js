import React from 'react'
import './NavBar.scss'
import WellDoneLogo from '../../Images/WellDoneLogo.png'
import { Link } from 'react-router-dom'

const NavLeft = () => (
  <div className='nav-left'>
    <Link to='/dashboard'>
      <img className='logo' src={WellDoneLogo} alt='Well Done logo' />
    </Link>
  </div>
)

export default NavLeft
