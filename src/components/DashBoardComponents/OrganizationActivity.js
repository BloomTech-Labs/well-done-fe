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

  // const prevAlert = usePrevious(alert)

  useEffect(() => {
    dispatch(checkDate())
  }, [])

  useEffect(() => {
    setAlert(historySelector.alertInfo)
  }, [alert])

  useEffect(() => {}, [historySelector.isFetching])

  // function checkStatus() {
  //   alert.forEach(item => {})
  // }

  // checkStatus()

  // if (!prevAlert) {
  //   return <div>Loading</div>
  // }

  let today = '12/10/2019'
  let yesterday = '12/09/2019'

  console.log(today)
  console.log(yesterday)

  function filterArrayToday() {
    return alert.filter(item => {
      if (item.created_at === today) {
        return item
      }
    })
  }

  function filterArrayYesterday() {
    return alert.filter(item => {
      if (item.created_at === yesterday) {
        return item
      }
    })
  }

  let filteredArrayToday = filterArrayToday()
  let filteredArrayYesterday = filterArrayYesterday()

  function compare(today, yesterday) {
    let arr = []

    today.forEach(item => {
      yesterday.forEach(item2 => {
        if (item.status !== item2.status) {
          console.log(item)
          arr = [...arr, item]
        }
      })
    })

    return arr
  }

  let result = compare(filteredArrayToday, filteredArrayYesterday)

  if (!alert) {
    return <div>Loading</div>
  }

  console.log(result, 'ALERT HERE')
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
