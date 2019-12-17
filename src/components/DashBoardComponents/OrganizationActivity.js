import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './OrganizationActivity.style.scss'
import usePrevious from '../../CustomHooks/usePrevious'

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

  const [alert, setAlert] = useState([])
  const historySelector = useSelector(state => state.historyReducer)
  const dispatch = useDispatch()

  // const [count, setCount] = useState(0)

  const prevAlert = usePrevious(alert)

  useEffect(() => {
    setAlert(historySelector.history)
  }, [historySelector.isFetching])

  // function checkStatus() {
  //   alert.forEach(item => {})
  // }

  // checkStatus()

  if (!prevAlert) {
    return <div>Loading</div>
  }

  console.log(alert[475], 'AFTER')
  console.log(prevAlert[475], 'BEFORE')

  return (
    <div className='orgActivityChart'>
      <div className='orgActivityHeader'>
        <div className='orgActivityHeaderName'>Organization Activity</div>
      </div>
      <div className='orgActivityContainer'>
        {alert.map((items, index) => {
          return (
            <div className='orgActivityAlertInfo'>
              <div className='orgActivityCardContainer'>
                <div key={index} className='orgActivityCardLeft'>
                  <p>
                    <span className='orgSpan'>Pump ID: </span>
                    {items.physical_id}
                  </p>
                  <p>
                    <span className='orgSpan'>Organization: </span>{' '}
                    {items.org_name}
                  </p>
                </div>
                <div className='orgActivityCardRight'>
                  <p>
                    <span className='orgSpan'>Location: </span>{' '}
                    {items.province_name}
                  </p>
                  <p>
                    <span className='orgSpan'>Status: </span> {items.status}
                  </p>
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
