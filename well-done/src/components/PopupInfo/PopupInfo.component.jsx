import React from 'react'
import { Link } from 'react-router-dom'
import './PopupInfo.styles.scss'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { FiHelpCircle, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

const PopupInfo = props => {
  console.log(props, 'POPUPINFO PROPS')
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

  const statusHistory = props.history.filter(day => {
    return day.sensor_id == props.selectedPump.physical_id
  })

  const { status, sensor_pid, province_name, country_name } = props.selectedPump
  return (
    <div className='popupInfo'>
      <div className='pump_id'>
        {status == 0 || status == null ? zeroNull : status == 1 ? one : two}
        <p className='pump_num'>Pump {sensor_pid}</p>
      </div>
      <div className='pump_info'>
        <div className='spread'>
          {statusHistory.map(day =>
            day.status == null || day.status == 0 ? (
              <div key={day.history_id} className='spread-red'></div>
            ) : day.status == 1 ? (
              <div key={day.history_id} className='spread-yellow'></div>
            ) : (
              <div key={day.history_id} className='spread-green'></div>
            )
          )}
        </div>
        <h3>{country_name}</h3>
        <p className='province_name'>{province_name}</p>

        <Link to={{ pathname: '/monitorDetails' }}>
          <Button type='link'>More details</Button>
        </Link>
      </div>
    </div>
  )
}

export default PopupInfo
