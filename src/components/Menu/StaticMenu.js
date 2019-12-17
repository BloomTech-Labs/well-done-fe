import React from 'react'
import './StaticMenu.scss'
import { IoIosHome, IoMdCreate, IoIosSettings } from 'react-icons/io'
import { Route, Link, Redirect } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

const StaticMenu = props => {
  const logout = () => {
    localStorage.removeItem('token')
    return <Redirect to='/' />
  }
  return (
    <div className='entire-menu'>
      <img
        className='logo'
        src='https://res.cloudinary.com/dfulxq7so/image/upload/v1572403214/1ff21a300da2c00f0432c0b516f8492a_lzdqay.png'
        alt='Well Done logo'
      />
      <p className='name'>Smarter Villages</p>
      <p className='email-address'>WellDone@WellDone.org</p>
      <span></span>
      <div className='overlay-content'>
        <div className='each-nav'>
          <IoIosHome size={25} style={{ margin: '7.5px 10px' }} />
          <Link
            exact
            to='/dashboard'
            activeClassName='activeNavButton'
            className='link'
          >
            Home
          </Link>
        </div>
        <div className='each-nav'>
          <IoMdCreate size={25} style={{ margin: '7.5px 10px' }} />
          <Link
            to='/overview'
            activeClassName='activeNavButton'
            className='link'
          >
            Overview
          </Link>
        </div>
        <div className='each-nav'>
          <IoIosSettings size={25} style={{ margin: '7.5px 10px' }} />
          <Link
            to='/settings'
            activeClassName='activeNavButton'
            className='link'
          >
            Settings
          </Link>
        </div>
        <div className='each-nav' onClick={logout}>
          <FiLogOut size={25} style={{ margin: '7.5px 10px' }} />
          <Link activeClassName='activeNavButton' className='link'>
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StaticMenu
