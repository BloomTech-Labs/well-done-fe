import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import MetaTags from 'react-meta-tags'

import Dashboard from './pages/Dashboard'
import MonitorDetails from './pages/MonitorDetail'
import Monitors from './pages/OverviewPage/MonitorsPage'
import Settings from './pages/Settings/Settings'
import PrivateRoute from './components/PrivateRoute.jsx'
import SignIn from './components/SignIn/SignIn'

function App(props) {
  const [searchFiltered, setSearchFiltered] = useState([])
  const [selectedPump, setSelectedPump] = useState(null)

  return (
    <div>
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
        <Route exact path="/" component={SignIn} />
        <PrivateRoute
          path='/dashboard'
          searchFiltered={searchFiltered}
          setSearchFiltered={setSearchFiltered}
          selectedPump={selectedPump}
          setSelectedPump={setSelectedPump}
          page={Dashboard}
        />
        <PrivateRoute
          path='/monitorDetails'
          page={MonitorDetails}
          selectedPump={selectedPump}
        />
        <PrivateRoute path='/overview' page={Monitors} />
        <PrivateRoute path='/settings' page={Settings} />
      </Switch>
    </div>
  )
}

export default App
