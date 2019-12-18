import React from 'react'
import moment from 'moment'

const OrganizationActivityCard = props => {
  let found = props.sensors.find(item => {
    if (item.sensor_id === props.items.sensor_id) {
      return item
    }
  })
  console.log(found)

  const routeHandler = e => {
    e.preventDefault()
    props.setSelectedPump(found)
    props.history.push('/monitordetails')
  }

  return (
    <div className='orgActivityAlertInfo'>
      <div key={props.index} className='orgActivityCardContainer'>
        <p className='pumpOrg'>
          <span className='orgSpan'>Pump #{props.items.sensor_id}</span>
          <span className='orgSpan'>Organization: {found.org_name}</span>
        </p>
        <p className='pumpOrg'>
          <span className='orgSpan'>Status: {props.currentStatus}</span>
          <span className='orgSpan'>Province: {found.province_name}</span>
        </p>
        <p className='pumpOrg'>
          <span className='orgSpan'>Previous Status: {props.prevStatus}</span>

          <span className='orgSpan'>District: {found.district_name}</span>
        </p>
      </div>
      <span className='btnCon'>
        <span className='date'>
          {moment(props.items.created_at).format('MMMM Do, YYYY')}
        </span>
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
