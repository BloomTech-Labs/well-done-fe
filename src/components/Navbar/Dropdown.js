import React from 'react'
import { NavLink } from 'react-router-dom'
import useOnClickOutside from 'use-onclickoutside'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { IoIosSettings } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { connect } from 'react-redux'

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

  const userRole = localStorage.getItem('role')

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
          <NavLink className='tab-nav' to='/admin'>
            Admin
          </NavLink>

          {userRole === 'super_user' ? (
            <NavLink className='tab-nav' to='/organizations'>
              Organizations
            </NavLink>
          ) : null}

          <NavLink
            to='/settings'
            activeClassName='activeNavButton'
            className='set-link'
          >
            <IoIosSettings
              size={25}
              style={{ position: 'relative', top: '7px', right: '5px' }}
            />
            Settings
          </NavLink>
        </div>
        <div className='logout-btn' onClick={logout}>
          <div className='navSvg'>
            <FiLogOut
              size={25}
              style={{
                position: 'relative',
                margin: '-6.5px 0px',
                right: '5px',
              }}
            />
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
})

export default connect(mapStateToProps)(withRouter(Dropdown))
