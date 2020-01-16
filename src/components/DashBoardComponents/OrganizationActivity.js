import React from 'react'
import moment from 'moment'
import { Route } from 'react-router-dom'

import OrganizationActivityCard from './OrganizationActivityCard'
import './OrganizationActivity.style.scss'
import { stat } from 'fs'

const OrganizationActivity = props => {
  //Getting and formatting dates for last seven days
  // let week = []
  // let count = 0

  // for (let i = 0; i < 6; i++) {
  //   let today = new Date()
  //   let year = today.getFullYear()
  //   let month = today.getMonth() + 1

  //   today = today.getDate() - count
  //   today = month.toString() + '/' + today.toString() + '/' + year.toString()
  //   today = moment(today).format('MM/DD/YYYY')

  //   let yesterday = new Date()
  //   yesterday = yesterday.getDate() - (count + 1)
  //   yesterday =
  //     month.toString() + '/' + yesterday.toString() + '/' + year.toString()
  //   yesterday = moment(yesterday).format('MM/DD/YYYY')

  //   week = [...week, [today, yesterday]]

  //   count++
  // }

  // //Filtering the history for the last seven days
  // let alerts = props.alertInfo

  // let currentDates = []

  // for (let i = 0; i < week.length; i++) {
  //   function filterArrayToday() {
  //     return alerts.filter(item => {
  //       if (item.created_at === week[i][0]) {
  //         return item
  //       }
  //     })
  //   }

  //   function filterArrayYesterday() {
  //     return alerts.filter(item => {
  //       if (item.created_at === week[i][1]) {
  //         return item
  //       }
  //     })
  //   }

  //   let filteredArrayToday = filterArrayToday()
  //   let filteredArrayYesterday = filterArrayYesterday()

  //   currentDates = [
  //     ...currentDates,
  //     [filteredArrayToday, filteredArrayYesterday],
  //   ]
  // }

  // //Sorting the sensor_id and checking for status changes
  // let statusComparison = []

  // for (let i = 0; i < currentDates.length; i++) {
  //   function compare(today, yesterday) {
  //     let arr = []
  //     console.log(today)
  //     console.log(yesterday, 'yesterday')

  //     today = today.sort(function(a, b) {
  //       if (a.sensor_id < b.sensor_id) {
  //         return -1
  //       } else {
  //         return 0
  //       }
  //     })

  //     yesterday = yesterday.sort(function(a, b) {
  //       if (a.sensor_id < b.sensor_id) {
  //         return -1
  //       } else {
  //         return 0
  //       }
  //     })

  //     for (let c = 0; c < today.length; c++) {
  //       if (
  //         today[c].status !== yesterday[c].status &&
  //         today[c].sensor_id === yesterday[c].sensor_id
  //       ) {
  //         arr = [...arr, today[c], yesterday[c]]
  //       }
  //     }

  //     return arr
  //   }

  //   let result = compare(currentDates[i][0], currentDates[i][1])

  //   statusComparison = [...statusComparison, result]
  // }

  // //Reducing each status change between two days into one index
  // let reducedArray = []

  // for (let i = 0; i < statusComparison.length; i++) {
  //   let reduced = statusComparison[i].reduce(function(acc, val, index) {
  //     const found = acc.find(a => a.sensor_id === val.sensor_id)

  //     if (!found) {
  //       acc.push(val)
  //     } else {
  //       acc = [
  //         ...acc,
  //         { ...acc[index - 1], date2: val.created_at, status2: val.status },
  //       ]
  //     }

  //     return acc
  //   }, [])

  //   reducedArray = [...reducedArray, reduced]
  // }

  // //Filtering out the indexes without both the day it is associated with and the previous day
  // let filteredArray = []

  // for (let i = 0; i < reducedArray.length; i++) {
  //   let filtered = reducedArray[i].filter(item => {
  //     if (item.hasOwnProperty('date2')) {
  //       return item
  //     }
  //   })

  //   filteredArray = [...filteredArray, filtered]
  // }

  // if (props.alertInfo.length === 0) {
  //   return <div>Loading</div>
  // }

  return (
    <div className='orgActivityChart'>
      {/* <div className='orgActivityHeader'>
        <div className='orgActivityHeaderName'>
          <h1>Organization Activity</h1>
        </div>
      </div>
      <div className='orgActivityContainer'>
        {filteredArray.map(item => {
          return item.map((items, index) => {
            if (items.status === 2) {
              let currentStatus = '🟢'
              if (items.status2 === 1) {
                let prevStatus = '🟡'
                return (
                  <OrganizationActivityCard
                    selectedPump={props.selectedPump}
                    setSelectedPump={props.setSelectedPump}
                    sensors={props.sensors}
                    index={index}
                    items={items}
                    currentStatus={currentStatus}
                    prevStatus={prevStatus}
                  />
                )
              } else if (items.status2 === null) {
                let prevStatus = '🔴'
                return (
                  <OrganizationActivityCard
                    selectedPump={props.selectedPump}
                    setSelectedPump={props.setSelectedPump}
                    sensors={props.sensors}
                    index={index}
                    items={items}
                    currentStatus={currentStatus}
                    prevStatus={prevStatus}
                  />
                )
              }
            } else if (items.status === 1) {
              let currentStatus = '🟡'
              if (items.status2 === 2) {
                let prevStatus = '🟢'
                return (
                  <OrganizationActivityCard
                    selectedPump={props.selectedPump}
                    setSelectedPump={props.setSelectedPump}
                    sensors={props.sensors}
                    index={index}
                    items={items}
                    currentStatus={currentStatus}
                    prevStatus={prevStatus}
                  />
                )
              } else if (items.status2 === null) {
                let prevStatus = '🔴'
                return (
                  <OrganizationActivityCard
                    selectedPump={props.selectedPump}
                    setSelectedPump={props.setSelectedPump}
                    sensors={props.sensors}
                    index={index}
                    items={items}
                    currentStatus={currentStatus}
                    prevStatus={prevStatus}
                  />
                )
              }
            } else if (items.status === null) {
              let currentStatus = '🔴'
              if (items.status2 === 2) {
                let prevStatus = '🟢'
                return (
                  <OrganizationActivityCard
                    selectedPump={props.selectedPump}
                    setSelectedPump={props.setSelectedPump}
                    sensors={props.sensors}
                    index={index}
                    items={items}
                    currentStatus={currentStatus}
                    prevStatus={prevStatus}
                  />
                )
              } else if (items.status2 === 1) {
                let prevStatus = '🟡'
                return (
                  <OrganizationActivityCard
                    selectedPump={props.selectedPump}
                    setSelectedPump={props.setSelectedPump}
                    sensors={props.sensors}
                    index={index}
                    items={items}
                    currentStatus={currentStatus}
                    prevStatus={prevStatus}
                  />
                )
              }
            }
          })
        })}
      </div> */}
    </div>
  )
}

export default OrganizationActivity
