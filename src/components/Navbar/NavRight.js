import React, { useState, useEffect } from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown.js'
import { useSelector, useDispatch } from 'react-redux'
const NavRight = () => {
  const userSelector = useSelector(state => state.userReducer)
  const [displayDropdown, setdisplayDropdown] = useState(false)
  const userRole = localStorage.getItem('role')

  const dispatch = useDispatch()
  const { first_name, last_name } = userSelector.user
  useEffect(() => {
    if (first_name) {
      dispatch({
        type: 'STARTING_INITIALS',
        payload: first_name + ' ' + last_name,
      })
    }
  }, [userSelector.isFetching, dispatch, first_name, last_name])

  return (
    <div className='nav-right'>
      <NavLink className='margin-left' to='/dashboard'>
        Dashboard
      </NavLink>
      <NavLink className='margin-left' to='/overview'>
        Monitors
      </NavLink>
      <NavLink className='margin-left' to='/admin'>
        Admin
      </NavLink>
      {userRole === 'super_user' ? (
        <NavLink className='margin-left' to='/organizations'>
          Organizations
        </NavLink>
      ) : null}

      <div
        className={
          displayDropdown ? 'margin-left-droplet' : 'margin-left-droplet'
        }
        onClick={() => setdisplayDropdown(!displayDropdown)}
      >
        <p
          style={{
            borderRadius: '50%',
            minHeight: '40px',
            minWidth: '40px',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '17%  auto',
            background: '#0db4e9',
            fontSize: '2rem',
            // overflow:
          }}
        >
          {userSelector.initials ? userSelector.initials : ''}
        </p>
        {/* <svg
          className='drop-svg'
          width='24'
          height='35'
          viewBox='0 0 24 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.2042 0C6.61381 11.6667 0.538452 16.8894 0.538452 23.3341C0.538452 29.7785 5.75976 35 12.2042 35C18.6549 35 23.8717 29.7785 23.8717 23.3341C23.8717 16.8894 17.9609 11.6667 12.2042 0Z'
            fill='#35C6F4'
          />
          <path
            d='M12.1496 15.1423C7.71756 15.1423 4.12048 18.7361 4.12048 23.1699C4.12048 27.6072 7.71756 31.2045 12.1496 31.2045C16.5879 31.2045 20.1846 27.6072 20.1846 23.1699C20.1846 18.7361 16.5879 15.1423 12.1496 15.1423Z'
            fill='#AFE2F9'
          />
          <path
            d='M14.3053 20.428C13.0944 20.428 12.1051 21.8933 12.1051 21.8933C12.1051 21.8933 11.1245 20.428 9.9067 20.428C8.69403 20.428 7.70239 21.1592 7.70239 22.6235C7.70239 24.8216 12.1051 27.7506 12.1051 27.7506C12.1051 27.7506 16.5119 24.8216 16.5119 22.6235C16.5119 21.1592 15.5185 20.428 14.3053 20.428Z'
            fill='white'
          />
        </svg> */}

        {displayDropdown && <Dropdown setterFunction={setdisplayDropdown} />}
      </div>
    </div>
  )
}

export default NavRight
