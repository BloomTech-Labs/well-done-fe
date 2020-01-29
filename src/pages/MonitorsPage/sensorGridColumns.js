import React, { Component } from 'react'
import ViewButton from '../../components/DashBoardComponents/ViewButton'
import TrashCan from './TrashCan'
import moment from 'moment'

// needs sesnor data too pass down
export const columnsFunc = (data, dispatch, showViewButton) => {
  return [
    {
      headerName: 'Sensor ID',
      field: 'physical_id',
      sortable: true,
      filter: true,
      filter: 'agNumberColumnFilter',
      minWidth: 95,
      cellStyle: {
        'font-size': '2rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'Installed',
      field: 'created_at',
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
      headerName: 'view',
      field: 'view',
      // sortable: true,
      // filter: true,
      cellRendererFramework: params => {
        return (
          <div>
            {showViewButton === 0 ? (
              <ViewButton
                dispatch={dispatch}
                data={params.data}
                history={data.history}
              />
            ) : (
              <TrashCan
                selectedPump={data.selectedPump}
                setSelectedPump={data.setSelectedPump}
                data={params.data}
                otherProps={data.props}
                deleteSensor={data.deleteSensor}
                params={params}
              />
            )}
          </div>
        )
      },

      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
      cellRendererParams: {
        prop1: 'selectedPump',
      },
      minWidth: 90,
    },
  ]
}
