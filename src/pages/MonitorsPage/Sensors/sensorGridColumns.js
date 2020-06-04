import React, { Component } from 'react'
import ViewButton from '../../../components/DashBoardComponents/ViewButton'
import TrashCan from '../TrashCan'
import moment from 'moment'

// needs sesnor data too pass down
export const columnsFunc = (data, dispatch, showViewButton) => {
  return [
    {
      headerName: 'Sensor ID',
      field: 'physical_id',

      minWidth: 95,
      pinned: 'left',
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'Status',
      field: 'status',
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'Installed',
      field: 'data_finished',

      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'Depth',
      field: 'depth',
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'NGO',
      field: 'org_name',
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'Province',
      field: 'province_name',
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: 'Commune',
      field: 'commune_name',
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },

    {
      headerName: 'Village',
      field: 'village_name',
      minWidth: 90,
      cellStyle: {
        'font-size': '1.5rem',
        'padding-top': '.75rem',
      },
    },
    {
      headerName: '',
      field: 'view',
      pinned: 'right',

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
