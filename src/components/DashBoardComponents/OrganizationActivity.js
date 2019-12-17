import React, { useState, useEffect } from 'react'
import './OrganizationActivity.style.scss'

const OrganizationActivity = () => {
  const fakeAlerts = [
    {
      id: Date.now(),
      pumpId: 4777,
      org: 'Well Done',
      location: 'Siem Reap',
      status: 'Functioning',
    },
    {
      id: Date.now(),
      pumpId: 4734,
      org: 'Well Done',
      location: 'Siem Reap',
      status: 'Non-Functioning',
    },
    {
      id: Date.now(),
      pumpId: 4787,
      org: 'Well Done',
      location: 'Siem Reap',
      status: 'N/A',
    },
  ]

  const [alert, setAlert] = useState([
    {
      id: Date.now(),
      pumpId: 4722,
      org: 'Well Done',
      location: 'Siem Reap',
      status: 'Functioning',
    },
  ])

  const addAlert = pump => {
    setAlert([...alert, ...pump])
  }

  useEffect(() => {
    addAlert(fakeAlerts)
  }, [])
  console.log(alert)

  return (
    <div className='orgActivityChart'>
      <div className='orgActivityHeader'>
        <div className='orgActivityHeaderName'>Organization Activity</div>
      </div>
      <div className='orgActivityContainer'>
        {alert.map(items => {
          return (
            <div className='orgActivityAlertInfo'>
              <div className="orgActivityCardContainer">
              <div className='orgActivityCardLeft'>
                <p><span className="orgSpan">Pump ID: </span>{items.pumpId}</p>
                <p>Organization: {items.org}</p>
              </div>
              <div className='orgActivityCardRight'>
                <p>Location: {items.location}</p>
                <p>Status: {items.status}</p>
              </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrganizationActivity
