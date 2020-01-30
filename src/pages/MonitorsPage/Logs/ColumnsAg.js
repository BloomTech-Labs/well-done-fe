import React from 'react'
import moment from 'moment'

function ColumnsAg() {
  return [
    {
      headerName: 'Log ID',
      field: 'id',
      sortable: true,
      filter: true,
      //   filter: 'agNumberColumnFilter',
      minWidth: 95,
      cellStyle: {
        'font-size': '2rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'Date Filed',
      field: 'date_filed',
      // sortable: true,
      filter: true,
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
      filter: 'agDateColumnFilter',
      filterParams: {
        comparator: function(filterLocalDateAtMidnight, cellValue) {
          var dateAsString = moment(cellValue).format('DD/MM/YYYY')
          var dateParts = dateAsString.split('/')
          var cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0])
          )
          if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
            return 0
          }
          if (cellDate < filterLocalDateAtMidnight) {
            return -1
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1
          }
        },
        // browserDatePicker: true
      },
    },
    {
      headerName: 'Operator',
      field: 'operator_id',
      sortable: true,
      filter: true,
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'Status',
      field: 'status',
      sortable: true,
      filter: true,
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },

    {
      headerName: 'NGO',
      field: 'org_name',
      sortable: true,
      filter: true,
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'Notes',
      field: 'comment',
      sortable: true,
      filter: true,
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'Last Modified',
      field: 'last_modified',
      // sortable: true,
      filter: true,
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
      filter: 'agDateColumnFilter',
      filterParams: {
        comparator: function(filterLocalDateAtMidnight, cellValue) {
          var dateAsString = moment(cellValue).format('DD/MM/YYYY')
          var dateParts = dateAsString.split('/')
          var cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0])
          )
          if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
            return 0
          }
          if (cellDate < filterLocalDateAtMidnight) {
            return -1
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1
          }
        },
        // browserDatePicker: true
      },
    },
  ]
}

export default ColumnsAg
