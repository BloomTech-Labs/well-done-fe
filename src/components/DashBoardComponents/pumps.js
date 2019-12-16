import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import gridOptions from '../Grid/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSensors } from '../../actions/sensorActions'

const Pumps = props => {
  const fields = {
    columnDefs: [
      {
        headerName: 'Project',
        field: 'org_name',
        sortable: true,
        filter: true,
        width: 125,
      },
      {
        headerName: 'Sensor ID',
        field: 'physical_id',
        sortable: true,
        filter: true,
        width: 95,
      },
      {
        headerName: 'Status',
        field: 'status',
        sortable: true,
        filter: true,
        width: 90,
      },
      {
        headerName: 'Province',
        field: 'province_name',
        sortable: true,
        filter: true,
        width: 90,
      },
      {
        headerName: 'District',
        field: 'district_name',
        sortable: true,
        filter: true,
        width: 90,
      },
      {
        headerName: 'Commune',
        field: 'commune_name',
        sortable: true,
        filter: true,
        width: 100,
      },
    ],
  }

  const [grid, setGrid] = useState([])
  const sensorSelector = useSelector(state => state.sensorReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSensors())
  }, [])

  useEffect(() => {
    // if (sensorSelector.sensors) setGrid(sensorSelector.sensors)
  }, [sensorSelector.isFetching])

  console.log(grid, sensorSelector.sensors, 'PUMPS COMP')

  const onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
  }

  if (!sensorSelector.sensors) {
    return <div>Loading</div>
  }

  return (
    <div
      className='ag-theme-balham'
      style={{
        height: '500px',
        width: '750px',
        // marginTop: 15
        // marginLeft: 100
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
  )
}

export default Pumps
