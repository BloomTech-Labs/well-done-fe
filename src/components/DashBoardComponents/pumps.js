import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import gridOptions from '../Grid/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSensors } from '../../actions/sensorActions'
import './pumps.style.scss'
import moment from 'moment'

const Pumps = props => {
  const fields = {
    columnDefs: [
      {
        headerName: 'Sensor ID',
        field: 'physical_id',
        sortable: true,
        filter: true,
        minWidth: 90,
      },
      {
        headerName: 'Installed',
        field: 'created_at',
        sortable: true,
        filter: true,
        minWidth: 90,
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

  const [gridInfo, setGridInfo] = useState([])
  const sensorSelector = useSelector(state => state.sensorReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSensors())
  }, [])

  useEffect(() => {
    setGridInfo(sensorSelector.sensors)
  }, [sensorSelector.isFetching])

  const formatData = arr => {
    arr.map(item => {
      if (item.status === null) {
        return (item.status = 'N/A')
      } else if (item.status === 2) {
        return (item.status = 'Functioning')
      } else if (item.status === 1) {
        return (item.status = 'Non-Functioning')
      }
      // return (item.created_at = moment(item.created_at).format('YYYY'))
    })

    arr.map(item => {
      console.log(item)
      return (item.created_at = moment(item.created_at).format('MM/DD/YYYY'))
    })

    return arr
  }

  console.log(gridInfo, sensorSelector.isFetching, 'GRIDINFO')

  const onGridSizeChanged = params => {
    var gridWidth = document.getElementById('grid-wrapper').offsetWidth
    var columnsToShow = []
    var columnsToHide = []
    var totalColsWidth = 0
    var allColumns = params.columnApi.getAllColumns()
    for (var i = 0; i < allColumns.length; i++) {
      var column = allColumns[i]
      totalColsWidth += column.getMinWidth()
      if (totalColsWidth > gridWidth) {
        columnsToHide.push(column.colId)
      } else {
        columnsToShow.push(column.colId)
      }
    }
    params.columnApi.setColumnsVisible(columnsToShow, true)
    params.columnApi.setColumnsVisible(columnsToHide, false)
    params.api.sizeColumnsToFit()
  }

  formatData(gridInfo)

  return (
    <div className='pumpCon'>
      <div className='pumpChart'>
        <div className='pumpHeader'>
          <div className='pumpHeaderName'>Pumps</div>
          <button className='pumpHeaderButton'>+ Add Pumps</button>
        </div>
        <div id='grid-wrapper' style={{ width: '100%', height: '100%' }}>
          <div
            id='myGrid'
            style={{
              height: '500px',
              width: '100%',
            }}
            className='ag-theme-balham'
          >
            <AgGridReact
              columnDefs={fields.columnDefs}
              rowData={gridInfo}
              // gridOptions={gridOptions}
              // defaultColDef={this.state.defaultColDef}
              // rowSelection={this.state.rowSelection}
              // onGridReady={onGridReady}
              onGridSizeChanged={onGridSizeChanged}
            />
          </div>
        </div>
      </div>
      <div className='pumpChart'>
        <div className='pumpHeader'>
          <div className='pumpHeaderName'>Pumps</div>
          <button className='pumpHeaderButton'>+ Add Pumps</button>
        </div>
        <div id='grid-wrapper' style={{ width: '100%', height: '100%' }}>
          <div
            id='myGrid'
            style={{
              height: '500px',
              width: '100%',
            }}
            className='ag-theme-balham'
          >
            <AgGridReact
              columnDefs={fields.columnDefs}
              rowData={gridInfo}
              // gridOptions={gridOptions}
              // defaultColDef={this.state.defaultColDef}
              // rowSelection={this.state.rowSelection}
              // onGridReady={onGridReady}
              onGridSizeChanged={onGridSizeChanged}
              //comment
              //comment
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pumps
