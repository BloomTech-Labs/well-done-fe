// import React from 'react'
// import moment from 'moment'

// function LogsCalSearch() {
//   const [selectedDate, setSelectedDate] = React.useState('')
//   const [selectedDateEnd, setSelectedDateEnd] = React.useState('')

//   const handleDateChange = date => {
//     setSelectedDate(date)
//   }
//   const handleDateChangeEnd = date => {
//     setSelectedDateEnd(date)
//   }

//   const dispatch = useDispatch()

//   const onQuickFilterByCal = () => {
//     let startDate = moment(document.getElementById('logStart').value).format(
//       'MM/DD/YYYY'
//     )
//     let endDate = moment(document.getElementById('logEnd').value).format(
//       'MM/DD/YYYY'
//     )

//     console.log(startDate, 'handleChange')

//     if (startDate && endDate === 'Invalid date') {
//       return dispatch({ type: CLEAR_FILTER })
//     } else {
//       let filteredDates = props.gridInfo.filter(date => {
//         if (moment(date.created_at).isBetween(startDate, endDate)) {
//           return date
//         } else {
//           return false
//         }
//       })
//       dispatch({ type: FILTERED_SENSORS, payload: filteredDates })
//     }
//   }

//   return (
//     <>
//       <div className='calContainer'>
//         <input type='date' onChange={onQuickFilterByCal} id='logStart' />
//       </div>
//       <div className='calContainerComp'>
//         <input type='date' onChange={onQuickFilterByCal} id='logEnd' />
//       </div>
//     </>
//   )
// }

// export default LogsCalSearch
