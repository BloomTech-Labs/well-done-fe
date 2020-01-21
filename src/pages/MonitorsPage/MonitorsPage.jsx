import React, { useState, useEffect } from 'react'
import AxiosWithAuth from '../../components/AxiosWithAuth/axiosWithAuth'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchSensorsWithHistory,
  fetchSensorsWithOutHistory,
} from '../../actions/sensorActions'
import { fetchOrg } from 'actions/orgAction'

import SensorsWithoutHistory from './SensorsWithOutHistory'
import Legend from './Legend'
import StatusCards from './StatusCards'
import Grid from '../../components/Grid/Aggrid'
import PercentageChart from './PercentageChart'
import Menu from '../../components/Menu/Menu.component'
import Sensors from './Sensors'
import './MonitorsPage.scss'

// ant design style
import { Row, Col, Layout } from 'antd'
import 'antd/dist/antd.css'

const { Sider, Content } = Layout

const MonitorsPage = props => {
  const [pumpData, setPumpData] = useState([])
  const [funcPumps, setFuncPumps] = useState([])
  const [unPumps, setUnPumps] = useState([])
  const [nonPumps, setNonPumps] = useState([])

  const sensorSelector = useSelector(state => state.sensorReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSensorsWithHistory())
    dispatch(fetchSensorsWithOutHistory())
    dispatch(fetchOrg())
  }, [])

  useEffect(() => {
    setPumpData(sensorSelector.sensors)
    setFuncPumps(sensorSelector.sensors.filter(pump => pump.status === 2))
    setUnPumps(sensorSelector.sensors.filter(pump => pump.status === 1))
    setNonPumps(
      sensorSelector.sensors.filter(
        pump => pump.status === 0 || pump.status === null
      )
    )
  }, [sensorSelector.isFetching])

  return (
    <>
      <div className='monitorContainer'>
        <div className='percentContainer'>
          <PercentageChart
            funcPumps={funcPumps}
            unPumps={unPumps}
            nonPumps={nonPumps}
          />
        </div>

        {/* legend */}
        {/* <div className='dash-mob'> 
        <Menu  history={props.history} /></div> */}
        <div className='cardsContainer'>
          <StatusCards
            pumpData={pumpData}
            funcPumps={funcPumps}
            unPumps={unPumps}
            nonPumps={nonPumps}
          />
        </div>
      </div>
      <div className='sensorsWithoutHistory'>
        <SensorsWithoutHistory
          gridInfoWithOutHistory={sensorSelector.gridInfoWithOutHistory}
          gridInfo={sensorSelector.gridInfo}
        />
      </div>
      <div className='sensorTable'>
        <Sensors
          gridInfo={sensorSelector.gridInfo}
          selectedPump={props.selectedPump}
          setSelectedPump={props.setSelectedPump}
        />
      </div>
    </>
  )
}

export default MonitorsPage
