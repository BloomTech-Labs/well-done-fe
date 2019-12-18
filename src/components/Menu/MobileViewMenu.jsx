import React, { useState } from 'react'
import './MobileViewMenu.styles.scss'
import { IoIosHome, IoIosKey, IoIosSettings, IoMdCreate } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const MobileViewMenu = props => {
  const openNav = () => {
    document.getElementById('myNav').style.width = '50%'
  }

  const closeNav = () => {
    document.getElementById('myNav').style.width = '0%'
  }

  const logout = () => {
    localStorage.removeItem('token')
    props.history.push('/')
  }

  return (
    <div>
      <div className='mobile-hamburger-menu' onClick={openNav}>
        <span className='mobile-span'></span>
        <span className='mobile-span'></span>
        <span className='mobile-span'></span>
      </div>
      <div id='myNav' className='mobile-overlay' onClick={closeNav}>
        <a
          href='javascript:void(0)'
          className='mobile-closebtn'
          onClick={closeNav}
        >
          <div className='close-x'>x</div>
        </a>
        <div className='mobile-intro'>
          <img
            className='mobile-logo'
            src='https://res.cloudinary.com/dfulxq7so/image/upload/v1572403214/1ff21a300da2c00f0432c0b516f8492a_lzdqay.png'
            alt='logo'
          />
          <p className='mobile-name'>Smarter Villages</p>
          <p className='mobile-email-address'>WellDone@WellDone.org</p>
          <span className='mobile-span'></span>
        </div>
        <div className='mobile-overlay-content'>
          <div class='mobile-eachNav'>
            <IoIosHome size={25} />
            <Link to='/dashboard'>Home</Link>
          </div>
          <div className='mobile-eachNav'>
            <IoMdCreate size={25} />
            <a href='/overview'>Overview</a>
          </div>
          <div className='mobile-eachNav'>
            <IoIosSettings size={25} />
            <a href='/settings'>Settings</a>
          </div>
          <div className='mobile-eachNav' onClick={logout}>
            <FiLogOut size={25} />
            <a>Logout</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileViewMenu
