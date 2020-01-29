import React, { useEffect } from 'react'
import LogsHeader from './LogsHeader'
import { fetchLogs } from 'actions/logsActions'

// redux
import { withRouter } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

function LogsTable(props) {
  const logsSelector = useSelector(state => state.logsReducer)
  const selectedSensors = useSelector(
    state => state.selectedSensors.currentlySelected
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLogs())
  }, [])

  //filters through the logsSelector and currentlySelected arrays to match sensor ids and return new array with the matching sensors #'s
  const sensorFiltered = logsSelector.logsData.filter(log => {
    return log.sensor_id === selectedSensors.sensor_pid
  })

  console.log(sensorFiltered, 'this is the filtered logs')

  return (
    <div>
      <LogsHeader />
    </div>
  )
}

export default LogsTable
