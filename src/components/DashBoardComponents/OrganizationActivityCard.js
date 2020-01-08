import React from 'react'
import moment from 'moment'
import {withRouter} from 'react-router'

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
        <h2 className='pumpOrg'>
          <span className='orgSpan'>
            Pump #{props.items.sensor_id} ({found.org_name})
          </span>
          <span className='orgSpan prov'>Province: {found.province_name}</span>
        </h2>
        <p className='pumpOrg'>
          <h3 className='status'>
            <span className='orgSpan'>
              Current Status:{' '}
              <span className='emoji'>{props.currentStatus}</span>
            </span>
            <span className='orgSpan'>
              Previous Status: <span className='emoji'>{props.prevStatus}</span>
            </span>
          </h3>
        </p>
      </div>
      <span className='btnCon'>
        <span className='date'>
          {moment(props.items.created_at).format('MMMM Do, YYYY')}
        </span>
        <button onClick={e => routeHandler(e)} className='btn btn-info'>
          View
        </button>
      </span>
    </div>
  )
}

export default withRouter(OrganizationActivityCard)
