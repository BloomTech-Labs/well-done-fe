import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import './OrganizationActivity.style.scss'
import usePrevious from '../../CustomHooks/usePrevious'
import { checkDate } from '../../actions/sensorHistory'

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

  // let today = new Date()
  // let year = today.getFullYear()
  // let month = today.getMonth() + 1
  // today = moment(today).format('MM/DD/YYYY')

  // let yesterday = new Date()
  // yesterday = moment(yesterday).format('MM/DD/YYYY')

  // yesterday = yesterday
  //   .split('')
  //   .map((item, index) => {
  //     if (index > 2 && index < 5) {
  //       return Number(item)
  //     }
  //   })
  //   .join('')

  // yesterday = yesterday - 1
  // yesterday =
  //   month.toString() + '/' + yesterday.toString() + '/' + year.toString()
  let today = '12/10/2019'
  let yesterday = '12/09/2019'

  console.log(today)
  console.log(yesterday)
  console.log(alert, 'ALERT HERE')

  // const prevAlert = usePrevious(alert)

  useEffect(() => {
    dispatch(checkDate())
  }, [])

  useEffect(() => {
    setAlert(historySelector.alertInfo)
  }, [alert])

  // function checkStatus() {
  //   alert.forEach(item => {})
  // }

  // checkStatus()

  // if (!prevAlert) {
  //   return <div>Loading</div>
  // }

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
