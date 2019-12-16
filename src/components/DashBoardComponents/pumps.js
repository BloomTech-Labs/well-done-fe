import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import gridOptions from '../Grid/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSensors } from '../../actions/sensorActions'
import './pumps.style.scss'

const Pumps = props => {
  const fields = {
    columnDefs: [
      {
        headerName: 'Sensor ID',
        field: 'physical_id',
        sortable: true,
        filter: true,
        // minWidth: 95,
      },
      {
        headerName: 'Installed',
        field: 'created_at',
        sortable: true,
        filter: true,
        // minWidth: 90,
      },
      {
        headerName: 'Status',
        field: 'status',
        sortable: true,
        filter: true,
        minWwidth: 90,
      },
      {
        headerName: 'NGO',
        field: 'org_name',
        sortable: true,
        filter: true,
        minWidth: 90,
      },
    ],
  }

  const [grid, setGrid] = useState([])
  const sensorSelector = useSelector(state => state.sensorReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSensors())
  }, [])

  console.log(grid, sensorSelector.sensors, 'PUMPS COMP')

  // if (!sensorSelector.sensors) {
  //   return <div>Loading</div>
  // }

  return (
    <div className='pumpChart'>
      <div className='pumpHeader'>
        <div className='pumpHeaderName'>Pumps</div>
        <button className='pumpHeaderButton'>+ Add Pumps</button>
      </div>
      <div
        className='ag-theme-balham.css'
        style={{
          height: '500px',
          width: '400px',
        }}
      >
        <AgGridReact
          columnDefs={fields.columnDefs}
          rowData={sensorSelector.sensors}
          // gridOptions={gridOptions}
          // defaultColDef={this.state.defaultColDef}
          // rowSelection={this.state.rowSelection}
          // onGridReady={onGridReady}
        />
      </div>
    </div>
  )
}

export default Pumps
