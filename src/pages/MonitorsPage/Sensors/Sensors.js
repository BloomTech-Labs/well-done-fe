import React, { useState, useEffect } from 'react'

import { withRouter } from 'react-router'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import { columnsFunc } from './sensorGridColumns'
import gridOptionss from '../../../components/Grid/Pagination'
import '../../MonitorsPage/Sensors.style.scss'
import { useDispatch, useSelector } from 'react-redux'
import SensorSelector from '../SensorSelector'

import TrashCan from '../TrashCan'

import { AiOutlineSearch } from 'react-icons/ai'
import SensorsModal from '../SensorsModal'
import moment from 'moment'

import { deleteSensor } from '../../../actions/sensorActions'

import deleteIcon from '../../../icons/DeleteModeButton.svg'
import Archivebutton from '../../../icons/Archivebutton.svg'
import { date } from 'yup'
import CalendarFilter from '../CalendarFilter/CalendarFilter'
import RadioStatusFilter from '../RadioButton/RadioStatusFilter'

const Sensors = props => {
  useEffect(() => {
    document.querySelector('.ag-floating-filter-input').style.color = '#000'
  }, [])
  const [showViewButton, setShowViewButton] = useState(0)
  const [gridApi, setgridApi] = useState(null)
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)

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

  const viewHandler = () => {
    if (showViewButton === 0) {
      setShowViewButton(!showViewButton)
    } else {
      setShowViewButton(!showViewButton)
    }
    console.log(gridApi.__proto__, 'GRID API')
    gridApi.__proto__.redrawRows()
  }

  const deleteDisplay = () => {
    if (user.role === 'super_user') {
      return (
        <button className='deleteBtn' onClick={() => viewHandler()}>
          <img src={deleteIcon} alt='delete'></img>
        </button>
      )
    } else {
      return <button id='none' type='button'></button>
    }
  }

  const onQuickFilterChanged = () => {
    gridOptionss.api.setQuickFilter(
      document.getElementById('quickFilter').value
    )
  }
  const onQuickFilterByCal = () => {
    let dateInput = moment(document.getElementById('dateCal').value).format(
      'MM/DD/YYYY'
    )
    console.log(dateInput, 'Value')
    return gridOptionss.api.setQuickFilter(
      dateInput === 'Invalid date' ? '' : dateInput
    )
  }

  const exportToCsv = () => {
    var params = {
      skipHeader: false,
      skipFooters: true,
      skipGroups: true,
      fileName: 'OverviewGrid.csv',
    }
    gridOptionss.api.exportDataAsCsv(params)
  }

  return (
    <>
      <div className='sensorChart'>
        <div className='sensorHeader'>
          <div className='searchContainer'>
            <input
              className='searchInsensors'
              type='text'
              onChange={onQuickFilterChanged}
              id='quickFilter'
              placeholder='Search'
            />

            <AiOutlineSearch className='searchIcon' />
            {/* <RadioStatusFilter gridInfo={props.gridInfo} /> */}
          </div>

          <CalendarFilter gridInfo={props.gridInfo} gridApi={gridApi} />
        </div>
        {/* FIGURE OUT WHERE THIS WILL BE PLACE LATER */}
        {/* <div className='headerButton'>{deleteDisplay()}</div>  */}

        {/* <SensorSelector /> */}
      </div>
      <div id='grid-wrapper' style={{ width: '100%', height: '100%' }}>
        <div
          id='myGrid2'
          style={{
            height: '500px',
            width: '100%',
          }}
          className='ag-theme-balham'
        >
          <AgGridReact
            history={props.history}
            columnDefs={columnsFunc(props, dispatch, showViewButton)}
            rowData={props.gridInfo}
            gridOptions={gridOptionss}
            onGridSizeChanged={onGridSizeChanged}
            onGridReady={onGridReady}
            // floatingFilter={true}
          />
        </div>
      </div>
    </>
  )
}

export default withRouter(Sensors)