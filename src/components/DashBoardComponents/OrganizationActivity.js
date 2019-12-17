import React, { useState, useEffect } from 'react'
import './OrganizationActivity.style.scss'

const OrganizationActivity = () => {
  const fakeAlert = {
    id: Date.now(),
    pumpId: 4777,
    org: 'Well Done',
    location: 'Siem Reap',
    status: 'Functioning',
  }

  const fakeAlert1 = {
    id: Date.now(),
    pumpId: 4734,
    org: 'Well Done',
    location: 'Siem Reap',
    status: 'Non-Functioning',
  }

  const fakeAlert2 = {
    id: Date.now(),
    pumpId: 4787,
    org: 'Well Done',
    location: 'Siem Reap',
    status: 'N/A',
  }

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
    const newAlert = {
      id: Date.now(),
      pumpId: pump.pumpId,
      org: pump.org,
      location: pump.location,
      status: pump.status,
    }

    setAlert([...alert, newAlert])
  }

  useEffect(() => {
    addAlert(fakeAlert)
    addAlert(fakeAlert1)
    addAlert(fakeAlert2)
  }, [])

  console.log(alert)

  return (
    <div className='orgActivityChart'>
      <div className='orgActivityHeader'>
        <div className='orgActivityHeaderName'>Organization Activity</div>
      </div>
    </div>
  )
}

export default OrganizationActivity
