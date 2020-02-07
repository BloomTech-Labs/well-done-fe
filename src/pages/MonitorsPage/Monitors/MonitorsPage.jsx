import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import { fetchSensorsWithHistory } from 'actions/sensorActions'
import { fetchOrg } from 'actions/orgAction'

import StatusCards from '../StatusCards'
import PercentageChart from '../PercentageChart'
import Sensors from '../Sensors/Sensors'
import '../Monitors/MonitorsPage.scss'

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

  const useGridObjects = () => {
    // decide which arr gets used here later remove !
    let arr
    // create the useGridObject logic
    arr = sensorSelector.isFiltered
      ? sensorSelector.filteredSensors
      : sensorSelector.gridInfo

    arr.map(item => {
      if (item.status === null) {
        return {
          ...item,
          status: 'N/A',
          created_at: moment(item.created_at).format('MM/DD/YYYY'),
        }
      } else if (item.status === 2) {
        return {
          ...item,
          status: 'Functioning',
          created_at: moment(item.created_at).format('MM/DD/YYYY'),
        }
      } else if (item.status === 1) {
        return {
          ...item,
          status: 'Non-Functioning',
          created_at: moment(item.created_at).format('MM/DD/YYYY'),
        }
      }
    })
    return arr
  }

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
        <Sensors gridInfo={useGridObjects()} />
      </div>
    </div>
  )
}

export default MonitorsPage
