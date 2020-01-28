import React from 'react'
import './Dashboard.styles.scss'

const Banner = () => {
  const userRole = localStorage.getItem('role')

  const checkRole = () => {
    if (userRole === 'super_user') {
      return (
        <div className='banner-container'>
          <h4 className='header'>Admin</h4>
          <h1 className='title'>Dashboard</h1>
        </div>
      )
    } else if (userRole === 'org_admin') {
      return (
        <div className='banner-container'>
          <h4 className='header'>Org Admin</h4>
          <h1 className='title'>Dashboard</h1>
        </div>
      )
    } else {
      return (
        <div className='banner-container'>
          <h4 className='header'>Operator</h4>
          <h1 className='title'>Dashboard</h1>
        </div>
      )
    }
  }

  return <div>{checkRole()}</div>
}

export default Banner
