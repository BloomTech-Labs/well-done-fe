import React from 'react'
import { NavLink, Link, Redirect } from 'react-router-dom'
import useOnClickOutside from 'use-onclickoutside'
import {useDispatch} from 'react-redux'
import {withRouter} from 'react-router'
import { IoIosSettings } from "react-icons/io"

const Dropdown = props => {
  const dispatch = useDispatch()
  const logout = async() => {
    localStorage.removeItem('token')
   await dispatch({
      type: "TOGGLE_NAV_STATE", payload:false
    })
  props.history.push('/')
  }
  const ref = React.useRef(null)

  useOnClickOutside(ref, () => props.setterFunction(false))

  return (
    <div className='drop-down' ref={ref}>
       <div className="each-nav">
          <IoIosSettings size={25} style={{ position: "relative", top:"7px" }} />
          <NavLink
            to="/settings"
            activeClassName="activeNavButton"
            className="set-link"
          >
            Settings
          </NavLink>
        </div>
      <div classname= "logout-btn" onClick={logout}>
        Logout
      </div>
    </div>
  )
}

export default withRouter(Dropdown) 
