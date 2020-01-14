import React from 'react'
import { NavLink, Link, Redirect } from 'react-router-dom'
import useOnClickOutside from 'use-onclickoutside'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { IoIosSettings } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'

const Dropdown = props => {
  const dispatch = useDispatch()
  const logout = async () => {
    localStorage.removeItem('token')
    await dispatch({
      type: 'TOGGLE_NAV_STATE',
      payload: false,
    })
    props.history.push('/')
  }
  const ref = React.useRef(null)

  useOnClickOutside(ref, () => props.setterFunction(false))
  const email = localStorage.getItem("userEmail")

  return (
    <div className='drop-down' ref={ref}>
      <div className='item-container'>
      <div className='each-nav'>
      
        <NavLink className='tab-nav' to='/dashboard'>
        Dashboard
      </NavLink>
      <NavLink className='tab-nav' to='/overview'>
        Monitors
      </NavLink>
      <NavLink className='tab-nav' to='/organization'>
        Organizations
      </NavLink>
        <NavLink
          to='/settings'
          activeClassName='activeNavButton'
          className='set-link'
        >  
        <IoIosSettings size={25} style={{ position: 'relative', top: '7px' }} />
          Settings
        </NavLink>
      </div>
      <div className='logout-btn' onClick={logout}>
        <div className='navSvg'>
          <FiLogOut size={25} style={{ margin: '-6.5px 0px' }} />
         
          Logout
        </div>
      </div>
      <div className='user-email'>{email}</div>
      </div>
    </div>
  )
}

export default withRouter(Dropdown)
