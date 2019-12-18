import React from 'react'

const OrganizationActivityCard = props => {
  const routeHandler = e => {
    e.preventDefault()

    let found = props.sensors.find(item => {
      if (item.sensor_id === props.items.sensor_id) {
        return item
      }
    })

    props.setSelectedPump(found)
    props.history.push('/monitordetails')
  }

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
            <span className='orgSpan'>Previous Status: </span>
            {props.prevStatus}
          </p>
        </div>
      </div>
      <span className='btnCon'>
        <button
          onClick={e => routeHandler(e, props.data)}
          className='btn btn-info'
        >
          View
        </button>
      </span>
    </div>
  )
}

export default OrganizationActivityCard
