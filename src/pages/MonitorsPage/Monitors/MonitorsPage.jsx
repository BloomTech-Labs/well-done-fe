import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import { fetchSensorsWithHistory } from 'actions/sensorActions'
import { fetchRecentHistory } from 'actions/sensorHistoryActions'
import { fetchOrg } from 'actions/orgAction'

import StatusCards from '../StatusCards'
import PercentageChart from '../PercentageChart'
import Sensors from '../Sensors/Sensors'
import '../Monitors/MonitorsPage.scss'

const MonitorsPage = props => {
  const recentHistory = useSelector(state => state.historyReducer.recentHistory)
  const sensorSelector = useSelector(state => state.sensorReducer)
  const dispatch = useDispatch()
  let selectedOptions = sensorSelector.filterOptions

  const handleFilter = sensors => {
    let startDate = moment(sensorSelector.startDate).format('YYYY/MM/DD')
    let endDate = moment(sensorSelector.endDate).format('YYYY/MM/DD')

    switch (sensorSelector.visibilityFilter) {
      case 'FILTER_RAIDO_N_CAL':
        if (startDate === 'Invalid date' || endDate === 'Invalid date') {
          dispatch({ type: 'CHANGE_END_DATE', payload: '' })
          document.getElementById('compCal').value = ''
          return sensors
        } else {
          const filteredbyCalSensors = sensors.filter(date => {
            if (moment(date.created_at).isBetween(startDate, endDate)) {
              return date
            } else {
              return false
            }
          })

          if (
            selectedOptions.func === false &&
            selectedOptions.non === false &&
            selectedOptions.na === false
          ) {
            return filteredbyCalSensors
          } else {
            return filteredbyCalSensors.filter(sensor => {
              if (selectedOptions.non === true) {
                if (sensor.status === 'Non-Functioning') {
                  return sensor
                }
              }
              if (selectedOptions.func === true) {
                if (sensor.status === 'Functioning') {
                  return sensor
                }
              }
              if (selectedOptions.na === true) {
                if (sensor.status === 'Unknown') {
                  return sensor
                }
              }
            })
          }
        }

        break
      case 'FILTER_RADIO_BTNS':
        if (
          !selectedOptions.func &&
          !selectedOptions.non &&
          !selectedOptions.na
        ) {
          return
        } else {
          return sensors.filter(sensor => {
            if (selectedOptions.non) {
              if (sensor.status === 'Non-Functioning') {
                return sensor
              }
            }
            if (selectedOptions.func) {
              if (sensor.status === 'Functioning') {
                return sensor
              }
            }
            if (selectedOptions.na) {
              if (sensor.status === 'Unknown') {
                return sensor
              }
            }
          })
        }
        break
      case 'FILTER_CAL':
        if (startDate === 'Invalid date' || endDate === 'Invalid date') {
          dispatch({ type: 'CHANGE_END_DATE', payload: '' })
          document.getElementById('compCal').value = ''
          return sensors
        } else {
          return sensors.filter(date => {
            if (moment(date.created_at).isBetween(startDate, endDate)) {
              return date
            } else {
              return false
            }
          })
        }
        break
      default:
        break
    }
  }
  useEffect(() => {
    dispatch(fetchSensorsWithHistory())
    dispatch(fetchOrg())
    dispatch(fetchRecentHistory())
  }, [])

  let pumpData = sensorSelector.sensors
  let funcPumps = sensorSelector.sensors.filter(pump => pump.status === 2)
  let unPumps = sensorSelector.sensors.filter(pump => pump.status === 1)
  let nonPumps = sensorSelector.sensors.filter(
    pump => pump.status === 0 || pump.status === null
  )

  const useGridObjects = () => {
    // decide which arr gets used here later remove !
    let selectedOptions = sensorSelector.filterOptions

    const arr = sensorSelector.sensors.map(item => {
      if (item.physical === null) {
        return {
          ...item,
          status: 'N/A',
          created_at: moment(item.created_at).format('YYYY/MM/DD'),
        }
      } else if (recentHistory[item.physical_id] === 'yes') {
        return {
          ...item,
          status: 'Functioning',
          created_at: moment(item.created_at).format('YYYY/MM/DD'),
        }
      } else if (recentHistory[item.physical_id] === 'no') {
        return {
          ...item,
          status: 'Unknown',
          created_at: moment(item.created_at).format('YYYY/MM/DD'),
        }
      }
    })
    return sensorSelector.isFiltered ? handleFilter(arr) : arr
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
        <Sensors sensors={useGridObjects()} />
      </div>
    </div>
  )
}

export default MonitorsPage
