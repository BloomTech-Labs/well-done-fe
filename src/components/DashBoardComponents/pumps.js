import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Route, Switch } from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import gridOptions from '../Grid/Pagination'

import { fetchSensors, updateInfo } from '../../actions/sensorActions'
import ViewButton from './ViewButton'
import './pumps.style.scss'

const Pumps = props => {
  //grid style options
  gridOptions.rowHeight = 40

  const fields = {
    columnDefs: [
      {
        headerName: 'Sensor ID',
        field: 'physical_id',
        sortable: true,
        filter: true,
        minWidth: 95,
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
        minWidth: 90,
      },
      {
        headerName: 'NGO',
        field: 'org_name',
        sortable: true,
        filter: true,
        minWidth: 90,
      },
      {
        sortable: true,
        filter: true,
        cellRenderer: 'viewButton',
        cellRendererParams: {
          prop1: 'props.selectedPump',
        },
        minWidth: 90,
      },
    ],
    context: { componentParent: this },
    frameworkComponents: {
      viewButton: ViewButton,
    },
  }

  const [gridInfo, setGridInfo] = useState([])
  const sensorSelector = useSelector(state => state.sensorReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateInfo())
  }, [])

  useEffect(() => {
    setGridInfo(sensorSelector.gridInfo)
  }, [gridInfo])

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

  // FIXME:  //filter function
  function onQuickFilterChanged(params) {
    gridOptions.api.setQuickFilter(document.getElementById('quickFilter').value)
  }

  return (
    <div className='pumpChart'>
      <div className='pumpHeader'>
        <div className='pumpHeaderName'>Pumps</div>
        <input
          type='text'
          onInput={onQuickFilterChanged}
          id='quickFilter'
          placeholder='search...'
        />
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
          <Route
            path='/dashboard'
            render={prop => (
              <AgGridReact
                {...prop}
                columnDefs={fields.columnDefs}
                rowData={gridInfo}
                gridOptions={gridOptions}
                // defaultColDef={this.state.defaultColDef}
                // rowSelection={this.state.rowSelection}
                // onGridReady={onGridReady}
                selectedPump={props.selectedPump}
                setSelectedPump={props.setSelectedPump}
                context={fields.context}
                frameworkComponents={fields.frameworkComponents}
                onGridSizeChanged={onGridSizeChanged}
              />
            )}
          />
        </div>
      </div>
    </div>
  )
}
export default Pumps
