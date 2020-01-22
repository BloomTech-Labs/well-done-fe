import React from 'react'
import { Link } from 'react-router-dom'
import './PopupInfo.styles.scss'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { FiHelpCircle, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

const PopupInfo = props => {
  const zeroNull = (
    <div className='nonFunc-back-icon'>
      <FiAlertCircle className='nonFunc-front-icon' />
    </div>
  )
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

  const {
    status,
    sensor_pid,
    province_name,
    village_name,
    district_name,
  } = props.selectedPump

  console.log(props.selectedPump)

  const setSensor = () => {
    localStorage.setItem('sensor', props.selectedPump.sensor_pid)
  }

  return (
    <div className='popupInfo'>
      <div className='pump_id'>
        {Number(status) === 0 || status === null
          ? zeroNull
          : Number(status) === 1
          ? one
          : two}
        <p className='pump_num'> {sensor_pid}</p>
      </div>
      <div className='pump_info'>
        <div className='spread'>
          {statusHistory
            .slice(-14)
            .map(day =>
              day.status == null || day.status == 0 ? (
                <div key={day.history_id} className='spread-red'></div>
              ) : day.status == 1 ? (
                <div key={day.history_id} className='spread-yellow'></div>
              ) : (
                <div key={day.history_id} className='spread-green'></div>
              )
            )}
          {statusHistory.map(day =>
            day.status == null || day.status == 0 ? (
              <div key={day.history_id} className='triangle-red'></div>
            ) : day.status == 1 ? (
              <div key={day.history_id} className='triangle-yellow'></div>
            ) : (
              <div key={day.history_id} className='triangle-green'></div>
            )
          )}
        </div>
        <h4 className='district_name'>{district_name}</h4>
        <p className='province_name'>{province_name}</p>

        <Link to={{ pathname: '/monitorDetails' }}>
          <Button onClick={() => setSensor()} className='details_btn'>
            More details
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default PopupInfo
