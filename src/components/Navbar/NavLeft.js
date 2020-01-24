import React from 'react'
import './NavBar.scss'
import DropletDroplet from '../../icons/DropletDroplet.svg'
import { Link } from 'react-router-dom'

const NavLeft = () => (
  <div className='nav-left'>
    <Link to='dashboard'>
      <span className='logo-text'>WellDone</span>{' '}
      <img className='logo' src={DropletDroplet} alt='Well Done logo' />
    </Link>
  </div>
)

export default NavLeft
