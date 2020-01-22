import React from 'react'
import moment from 'moment'
import { withRouter } from 'react-router'

const OrganizationActivityCard = props => {
  console.log(props)

  return (
    <div className='orgActivityAlertInfo'>
      <div key={props.index} className='orgActivityCardContainer'>
        <h2 className='pumpOrg'>
          <span className='orgSpan'>
            Sensor #{props.item.sensor_id} ({props.individualSensor.org_name})
          </span>
          <span className='orgSpan prov'>
            Province:
            {props.individualSensor.province_name}
          </span>
        </h2>
        <p className='pumpOrg' />
        <h3 className='status' />
        <span className='orgSpan'>
          Current Status: <span className='emoji'>{props.currentStatus}</span>
        </span>
        <span className='orgSpan'>
          Previous Status: <span className='emoji'>{props.prevStatus}</span>
        </span>
      </div>
      <span className='btnCon'>
        <span className='date'>
          {moment(props.item.created_at).format('MMMM Do, YYYY')}
        </span>
      </span>
    </div>
  )
}

export default withRouter(OrganizationActivityCard)
