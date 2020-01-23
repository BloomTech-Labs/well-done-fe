import React, { useState, useEffect } from 'react'
import { NavLink, Link, Redirect } from 'react-router-dom'
import useOnClickOutside from 'use-onclickoutside'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { IoIosSettings } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { connect } from "react-redux";


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

  useOnClickOutside(ref, () => props.setterFunction(true))

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
        <IoIosSettings size={25} style={{ position: 'relative', top: '7px', right:'5px' }} />
          Settings
        </NavLink>
      </div>
      <div className='logout-btn' onClick={logout}>
        <div className='navSvg'>
          <FiLogOut size={25} style={{position: 'relative', margin: '-6.5px 0px', right:'5px' }} />
         
          Logout
        </div>
      </div>
      <div className='user-email'>{props.user.email_address}</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default connect (mapStateToProps) (withRouter(Dropdown))
