import React, { useEffect, useState } from 'react'

import { withRouter } from 'react-router'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import { columnsFunc } from './sensorGridColumns'
import gridOptionss from '../../../components/Grid/Pagination'
import '../../MonitorsPage/Sensors.style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHistory } from '../../../actions/sensorHistory'
import { AiOutlineSearch } from 'react-icons/ai'
import { CSVLink } from 'react-csv'
import Archivebutton from 'icons/Archivebutton.svg'

import CalendarFilter from '../CalendarFilter/CalendarFilter'

const Sensors = props => {
  const dispatch = useDispatch()
  const historyReducerData = useSelector(state => state.historyReducer)

  useEffect(() => {
    dispatch(fetchHistory())
  }, [])

  console.log(historyReducerData, 'history over here')

  const onGridSizeChanged = params => {
    var gridWidth = document.getElementById('grid-wrapper-sensor').offsetWidth
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

  const onQuickFilterChanged = () => {
    gridOptionss.api.setQuickFilter(
      document.getElementById('quickFilter').value
    )
  }

  const exportToCsv = () => {
    var params = {
      skipHeader: false,
      skipFooters: true,
      skipGroups: true,
      fileName: 'Monitor-Report.csv',
    }
    gridOptionss.api.exportDataAsCsv(params)
  }
  // console.log(props.sensors, 'sens data')
  return (
    <>
      <div className='sensorChart'>
        <div className='sensorHeader'>
          <div className='searchSensorContainer'>
            <input
              className='searchInsensors'
              type='text'
              onChange={onQuickFilterChanged}
              id='quickFilter'
              placeholder='Search'
            />

            <AiOutlineSearch className='searchIcon' />
          </div>

          <CalendarFilter sensors={props.sensors} />
        </div>
      </div>
      <div className='dLButtonCont'>
        <button className='downloadButton'>
          <CSVLink
            data={historyReducerData.history}
            className='csvContainer'
            filename={'history.csv'}
            target='_blank'
          >
            <p>Download</p>
            <img src={Archivebutton} alt='download'></img>
          </CSVLink>
        </button>
      </div>
      <div
        id='grid-wrapper-sensor'
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <div
          id='c'
          style={{
            height: '44vh',
            width: '96%',
          }}
          className='ag-theme-balham'
        >
          <AgGridReact
            history={props.history}
            columnDefs={columnsFunc(props, dispatch, 0)}
            rowData={props.sensors}
            gridOptions={gridOptionss}
            onGridSizeChanged={onGridSizeChanged}
          />
        </div>
      </div>
    </>
  )
}

export default withRouter(Sensors)
