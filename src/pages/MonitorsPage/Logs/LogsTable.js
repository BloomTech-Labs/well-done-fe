import React, { useState, useEffect } from 'react'
import LogsHeader from './LogsHeader'
import columnAg from './ColumnsAg'

//agGrid
import gridOptionss from '../../../components/Grid/Pagination'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

// redux
import { fetchLogs } from 'actions/logsActions'
import { withRouter } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

function LogsTable(props) {
  const [gridApi, setgridApi] = useState(null)
  const logsSelector = useSelector(state => state.logsReducer)
  const dispatch = useDispatch()
  const sensorLocalStorage = localStorage.getItem('sensor')

  // useEffect(() => {
  //   dispatch(fetchLogs())
  //   document.querySelector('.ag-floating-filter-input').style.color = '#000'
  // }, [])

  //filters through the logsSelector and sensor in localStorage to match sensor ids
  const sensorFiltered = logsSelector.logsData.filter(log => {
    return log.sensor_id === Number(sensorLocalStorage)
  })

  let gridColumnApi
  const onGridReady = params => {
    setgridApi(params.api)
    gridColumnApi = params.columnApi
  }

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

  return (
    <>
      <LogsHeader />
      <div id='grid-wrapper' style={{ width: '100%', height: '100%' }}>
        <div
          id='myGridLogs'
          style={{
            height: '500px',
            width: '100%',
          }}
          className='ag-theme-balham'
        >
          <AgGridReact
            columnDefs={columnAg()}
            rowData={sensorFiltered}
            gridOptions={gridOptionss}
            onGridSizeChanged={onGridSizeChanged}
            onGridReady={onGridReady}
            floatingFilter={false}
          />
        </div>
      </div>
    </>
  )
}

export default LogsTable
