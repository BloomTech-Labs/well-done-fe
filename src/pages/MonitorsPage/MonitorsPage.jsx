import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSensorsWithHistory } from 'actions/sensorActions'
import { fetchOrg } from 'actions/orgAction'

import StatusCards from './StatusCards'
import PercentageChart from './PercentageChart'
import Sensors from './Sensors'
import './MonitorsPage.scss'

const MonitorsPage = props => {
  const sensorSelector = useSelector(state => state.sensorReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSensorsWithHistory())
    dispatch(fetchOrg())
  }, [])

  let pumpData = sensorSelector.sensors
  let funcPumps = sensorSelector.sensors.filter(pump => pump.status === 2)
  let unPumps = sensorSelector.sensors.filter(pump => pump.status === 1)
  let nonPumps = sensorSelector.sensors.filter(
    pump => pump.status === 0 || pump.status === null
  )

  return (
    <div className='monitorsPageContainer'>
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
      <div className='sensorTable'>
        <Sensors
          gridInfo={
            sensorSelector.isFiltered
              ? sensorSelector.filteredSensors
              : sensorSelector.gridInfo
          }
        />
      </div>
    </div>
  )
}

export default MonitorsPage
