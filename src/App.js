import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from 'pages/Dashboard/Dashboard'
import MonitorDetails from 'pages/MonitorDetails/MonitorDetail'
import Monitors from 'pages/MonitorsPage/Monitors/MonitorsPage'
import NavBar from 'components/Navbar/Navbar.js'
import SignIn from 'components/SignIn/SignIn'
import MonitorsPage from 'pages/MonitorsPage/Monitors/MonitorsPage'
import { useSelector, useDispatch } from 'react-redux'
import 'App.style.scss'
import Settings from 'pages/Settings/Settings'
import { ChangePassword } from 'pages/ChangePassword'
import MetaTags from 'react-meta-tags'
import PrivateRoute from 'components/PrivateRoute.jsx'
import Admin from 'pages/Admin/Admin'
import Organizations from './pages/OrganizationsPage/Organizations.js'
import { fetchUser } from './actions/userActions.js'
import {
  fetchHistoryById,
  fetchSensorById,
} from 'actions/sensorHistoryActions.js'
import PassWordReset from '../src/components/User/PassWordReset'

function App(props) {
  const [temp, setTemp] = useState(false)
  const dispatch = useDispatch()
  const displayNav = useSelector(state => state.navShow)
  const user = useSelector(state => state.userReducer.user)
  const currentlySelected = useSelector(
    state => state.selectedSensors.currentlySelected
  )
  const historySelector = useSelector(state => state.historyReducer.history)

  const sensorId = localStorage.getItem('sensor')

  const userId = localStorage.getItem('userId')
  useEffect(() => {
    if (window.location.pathname !== '/') {
      dispatch({
        type: 'TOGGLE_NAV_STATE',
        payload: true,
      })
    }
    if (user.temp_pass) {
      setTemp(true)
    }
    if (user.temp_pass === false) {
      setTemp(false)
    }

    //prevent fetching when user not logged in
    if (window.location.pathname !== '/') {
      //checking if user object in redux is empty
      if (!Object.keys(user).length || !user.first_name) {
        // checking if user ID is in local storage
        if (userId) {
          // if userId is in local storage lets fetch some user data
          dispatch(fetchUser(userId))
        }
      }
    }

    if (!Object.keys(historySelector).length) {
      if (sensorId) {
        dispatch(fetchSensorById(sensorId))
        dispatch(fetchHistoryById(sensorId))
      }
    }
  }, [displayNav, historySelector, dispatch, sensorId, user, userId, temp])

  const [searchFiltered, setSearchFiltered] = useState([])

  return (
    <div className='app-container'>
      {!!displayNav && <NavBar />}
      {temp && <PassWordReset />}
      <MetaTags>
        <title>Well-Done Dashboard</title>
        <meta
          name='description'
          content='WellDone with its mission to consistently deliver clean, safe water to communities in need as well as provide long term accountability for infrastructure projects, provide water not just a well, they want to improve a dashboard by having our Lambda Labs team to build BackEnd from scratch and iterate FrontEnd features.'
        />
        <meta property='og:title' content='Well-Done' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dfulxq7so/image/upload/v1573914589/Screen_Shot_2019-11-16_at_6.29.30_AM_oq7itf.png'
        />
      </MetaTags>

      <Switch>
        <Route exact path='/' component={SignIn} />
        <PrivateRoute
          path='/dashboard'
          searchFiltered={searchFiltered}
          setSearchFiltered={setSearchFiltered}
          page={Dashboard}
        />
        <PrivateRoute path='/overview' page={MonitorsPage} />

        <PrivateRoute
          path='/monitor/:sensor_pid'
          page={MonitorDetails}
          selectedPump={currentlySelected}
        />

        <PrivateRoute path=':sensor_pid' page={MonitorDetails} />

        <PrivateRoute path='/organizations' page={Organizations} />

        <PrivateRoute path='/overview' page={Monitors} />
        <PrivateRoute path='/admin' page={Admin} />
        <PrivateRoute path='/settings' page={Settings} />
        <PrivateRoute path='/pwd' page={ChangePassword} />
      </Switch>
    </div>
  )
}

export default App
