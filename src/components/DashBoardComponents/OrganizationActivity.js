import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import moment from 'moment'

import OrganizationActivityCard from './OrganizationActivityCard'
import './OrganizationActivity.style.scss'

const OrganizationActivity = props => {
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

  let today = '12/07/2019'
  let yesterday = '12/06/2019'

  // console.log(today)
  // console.log(yesterday)

  let alerts = props.alertInfo

  function filterArrayToday() {
    return alerts.filter(item => {
      if (item.created_at === today) {
        return item
      }
    })
  }

  function filterArrayYesterday() {
    return alerts.filter(item => {
      if (item.created_at === yesterday) {
        return item
      }
    })
  }

  let filteredArrayToday = filterArrayToday()
  let filteredArrayYesterday = filterArrayYesterday()

  // console.log(filteredArrayToday, filteredArrayYesterday)

  function compare(today, yesterday) {
    let arr = []

    today = today.sort(function(a, b) {
      if (a.sensor_id < b.sensor_id) {
        return -1
      } else {
        return 0
      }
    })

    yesterday = yesterday.sort(function(a, b) {
      if (a.sensor_id < b.sensor_id) {
        return -1
      } else {
        return 0
      }
    })

    for (let i = 0; i < today.length; i++) {
      if (
        today[i].status !== yesterday[i].status &&
        today[i].sensor_id === yesterday[i].sensor_id
      ) {
        arr = [...arr, today[i], yesterday[i]]
      }
    }

    return arr
  }

  let result = compare(filteredArrayToday, filteredArrayYesterday)

  result = result.reduce(function(acc, val, index) {
    const found = acc.find(a => a.sensor_id === val.sensor_id)

    if (!found) {
      acc.push(val)
    } else {
      acc = [
        ...acc,
        { ...acc[index - 1], date2: val.created_at, status2: val.status },
      ]
    }

    return acc
  }, [])

  result = result.filter((item, index) => {
    if (index % 2 !== 0) {
      return item
    }
  })

  if (props.alertInfo.length === 0) {
    return <div>Loading</div>
  }

  return (
    <div className='orgActivityChart'>
      <div className='orgActivityHeader'>
        <div className='orgActivityHeaderName'>Organization Activity</div>
      </div>
      <div className='orgActivityContainer'>
        {result.map((items, index) => {
          if (items.status === 2) {
            let currentStatus = '🟢'
            if (items.status2 === 1) {
              let prevStatus = '🟡'
              return (
                <Route
                  path='/dashboard'
                  render={prop => (
                    <OrganizationActivityCard
                      {...prop}
                      selectedPump={props.selectedPump}
                      setSelectedPump={props.setSelectedPump}
                      sensors={props.sensors}
                      index={index}
                      items={items}
                      currentStatus={currentStatus}
                      prevStatus={prevStatus}
                    />
                  )}
                />
              )
            } else if (items.status2 === null) {
              let prevStatus = '🔴'
              return (
                <Route
                  path='/dashboard'
                  render={prop => (
                    <OrganizationActivityCard
                      {...prop}
                      selectedPump={props.selectedPump}
                      setSelectedPump={props.setSelectedPump}
                      sensors={props.sensors}
                      index={index}
                      items={items}
                      currentStatus={currentStatus}
                      prevStatus={prevStatus}
                    />
                  )}
                />
              )
            }
          } else if (items.status === 1) {
            let currentStatus = '🟡'
            if (items.status2 === 2) {
              let prevStatus = '🟢'
              return (
                <Route
                  path='/dashboard'
                  render={prop => (
                    <OrganizationActivityCard
                      {...prop}
                      selectedPump={props.selectedPump}
                      setSelectedPump={props.setSelectedPump}
                      sensors={props.sensors}
                      index={index}
                      items={items}
                      currentStatus={currentStatus}
                      prevStatus={prevStatus}
                    />
                  )}
                />
              )
            } else if (items.status2 === null) {
              let prevStatus = '🔴'
              return (
                <Route
                  path='/dashboard'
                  render={prop => (
                    <OrganizationActivityCard
                      {...prop}
                      selectedPump={props.selectedPump}
                      setSelectedPump={props.setSelectedPump}
                      sensors={props.sensors}
                      index={index}
                      items={items}
                      currentStatus={currentStatus}
                      prevStatus={prevStatus}
                    />
                  )}
                />
              )
            }
          } else if (items.status === null) {
            let currentStatus = '🔴'
            if (items.status2 === 2) {
              let prevStatus = '🟢'
              return (
                <Route
                  path='/dashboard'
                  render={prop => (
                    <OrganizationActivityCard
                      {...prop}
                      selectedPump={props.selectedPump}
                      setSelectedPump={props.setSelectedPump}
                      sensors={props.sensors}
                      index={index}
                      items={items}
                      currentStatus={currentStatus}
                      prevStatus={prevStatus}
                    />
                  )}
                />
              )
            } else if (items.status2 === 1) {
              let prevStatus = '🟡'
              return (
                <Route
                  path='/dashboard'
                  render={prop => (
                    <OrganizationActivityCard
                      {...prop}
                      selectedPump={props.selectedPump}
                      setSelectedPump={props.setSelectedPump}
                      sensors={props.sensors}
                      index={index}
                      items={items}
                      currentStatus={currentStatus}
                      prevStatus={prevStatus}
                    />
                  )}
                />
              )
            }
          }
        })}
      </div>
    </div>
  )
}

export default OrganizationActivity
