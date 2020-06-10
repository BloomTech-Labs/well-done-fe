import React from 'react'
import './Menu.styles.scss'
import { IoIosHome, IoIosSettings, IoMdCreate } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { Redirect, NavLink } from 'react-router-dom'

const Menu = props => {
  const openNav = () => {
    document.getElementById('myNav').style.width = '210px'
  }

  const closeNav = () => {
    document.getElementById('myNav').style.width = '0%'
  }

  const logout = () => {
    localStorage.removeItem('token')
    return <Redirect to='/' />
  }

  return (
    <div className='main-menu'>
      <div className='hamburger-menu' onClick={openNav}>
        <span style={{ backgroundColor: '#082B84' }}></span>
        <span style={{ backgroundColor: '#082B84' }}></span>
        <span style={{ backgroundColor: '#082B84' }}></span>
      </div>
      <div id='myNav' className='overlay' onClick={closeNav}>
        <div className='intro'>
          <img
            className='logo'
            src='https://res.cloudinary.com/dfulxq7so/image/upload/v1572403214/1ff21a300da2c00f0432c0b516f8492a_lzdqay.png'
            alt='logo'
          />
          <p className='name'>Smarter Villages</p>
          <p className='email-address'>WellDone@WellDone.org</p>
          <span className='span'></span>
        </div>
        <div className='overlay-content-map'>
          <div className='eachNav'>
            <IoIosHome size={25} />
            <NavLink to='/dashboard'>Home</NavLink>
          </div>
          <div className='eachNav'>
            <IoMdCreate size={25} />
            <NavLink to='/overview'>Monitors</NavLink>
          </div>
          <div className='eachNav'>
            <IoIosSettings size={25} />
            <NavLink to='/settings'>Settings</NavLink>
          </div>
          <div className='eachNav'>
            <FiLogOut size={25} />
            <NavLink onClick={logout} to='/'>
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
