import React from 'react'

const OrganizationActivityCard = props => {
  return (
    <div className='orgActivityAlertInfo'>
      <div className='orgActivityCardContainer'>
        <div key={props.index} className='orgActivityCardLeft'>
          <p>
            <span className='orgSpan'>Current Date: </span>
            {props.items.created_at}
          </p>
          <p>
            <span className='orgSpan'>Pump ID: </span>
            {props.items.sensor_id}
          </p>
        </div>
        <div className='orgActivityCardRight'>
          <p>
            <span className='orgSpan'>Status: </span> {props.currentStatus}
          </p>
          <p>
            <span className='orgSpan'>Previous Status: </span>{' '}
            {props.prevStatus}
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrganizationActivityCard
