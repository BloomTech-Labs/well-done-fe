import React from 'react'
import '../../MonitorsPage/Sensors.style.scss'
function EmailData({ data }) {
  return (
    <div className='email_link'>
      <a
        onChange={e => e.preventDefault()}
        href={`mailto:${data.cord_email}?subject=${data.sensor_id}`}
        target={`_blank`}
      >
        {data.cord_email}
      </a>
    </div>
  )
}

export default EmailData
