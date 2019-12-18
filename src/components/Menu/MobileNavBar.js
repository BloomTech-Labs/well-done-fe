import React from 'react'
import MobileViewMenu from '../Menu/MobileViewMenu.jsx'

const MobileNavBar = () => {
  return (
    <div className='mobile-nav-container'>
      <MobileViewMenu />
      <img
        className='logo'
        src='https://res.cloudinary.com/dfulxq7so/image/upload/v1572403214/1ff21a300da2c00f0432c0b516f8492a_lzdqay.png'
        alt='Well Done logo'
      />
    </div>
  )
}

export default MobileNavBar
