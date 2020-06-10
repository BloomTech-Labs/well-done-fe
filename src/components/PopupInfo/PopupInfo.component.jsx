import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './PopupInfo.styles.scss'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { FiHelpCircle, FiCheckCircle } from 'react-icons/fi'

const PopupInfo = props => {
  const recentHistory = useSelector(state => state.historyReducer.recentHistory)

  const one = (
    <div className='unknown-back-icon'>
      <FiHelpCircle className='unknown-front-icon' />
    </div>
  )
  const two = (
    <div className='func-back-icon'>
      <FiCheckCircle className='func-front-icon' />
    </div>
  )

  if (!props.history) {
    return <div>Loading</div>
  }
  // call endpoint instead
  // api/sensor_id/:id`
  const statusHistory = props.history.filter(day => {
    return Number(day.sensor_id) === Number(props.selectedPump.physical_id)
  })

  const { sensor_pid, province_name, district_name } = props.selectedPump
  console.log(props.selectedPump, recentHistory)
  return (
    <div className='popupInfo'>
      <div className='pump_id'>
        {recentHistory[sensor_pid] === 'yes' ? two : one}
        <p className='pump_num'> {sensor_pid}</p>
      </div>
      <div className='pump_info'>
        <div className='spread'>
          {statusHistory
            .slice(0, 14)
            .map(day =>
              day.status === null || day.status === 0 ? (
                <div key={day.history_id} className='spread-red'></div>
              ) : day.status === 1 ? (
                <div key={day.history_id} className='spread-yellow'></div>
              ) : (
                <div key={day.history_id} className='spread-green'></div>
              )
            )
            .reverse()}
          {recentHistory[sensor_pid] === 'yes' ? (
            <div className='triangle-green'></div>
          ) : (
            <div className='triangle-yellow'></div>
          )}
        </div>
        <h4 className='district_name'>{district_name}</h4>
        <p className='province_name'>{province_name}</p>

        <Link to={{ pathname: `/monitor/${sensor_pid}` }}>
          <Button className='details_btn'>More details</Button>
        </Link>
      </div>
    </div>
  )
}

export default PopupInfo
