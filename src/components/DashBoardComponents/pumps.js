import React, { useState } from 'react'

import { Route } from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

import gridOptionss from '../Grid/Pagination'
import ViewButton from './ViewButton'
import './pumps.style.scss'

import PumpsModal from './PumpsModal'
import TrashCan from './TrashCan'

import { AiOutlineSearch } from 'react-icons/ai'

const Pumps = props => {
  const [displayView, setDisplayView] = useState(0)
  //grid style options

  const fields = {
    columnDefs: [
      {
        headerName: 'Sensor ID',
        field: 'physical_id',
        sortable: true,
        filter: true,
        minWidth: 95,
        cellStyle: {
          'font-size': '2rem',
          'padding-top': '.75rem',
        },
      },
      {
        headerName: 'Installed',
        field: 'created_at',
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
        sortable: true,
        filter: true,
        cellRenderer: 'viewButton',
        cellStyle: {
          'font-size': '1.5rem',
          'padding-top': '.75rem',
        },
        cellRendererParams: {
          prop1: 'props.selectedPump',
        },
        minWidth: 90,
      },
    ],
    context: { componentParent: this },
    frameworkComponents: {
      viewButton: displayView === 0 ? ViewButton : TrashCan,
    },
  }

  const viewHandler = () => {
    if (displayView === 0) {
      setDisplayView(displayView + 1)
    } else {
      setDisplayView(0)
    }

    refreshCells()
    console.log('working', displayView)
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

  //filter function
  function onQuickFilterChanged(params) {
    gridOptionss.api.setQuickFilter(
      document.getElementById('quickFilter').value
    )
    console.log(gridOptionss, 'looks here for pumps filter')
  }

  function refreshCells(params) {
    gridOptionss.api.refreshCells(document.getElementById('myGrid2'))
  }

  return (
    <div className='pumpChart'>
      <div className='pumpHeader'>
        <div className='pumpHeaderName'>Pumps</div>
        <div className='searchContainer'>
          <input
            className='searchInPumps'
            type='text'
            onInput={onQuickFilterChanged}
            id='quickFilter'
            placeholder=' search...'
          />
          <AiOutlineSearch className='searchIcon' />
        </div>

        <button onClick={() => viewHandler()}>Delete</button>
        {/* <div className='modal'>
          <PumpsModal />
        </div> */}
        {/* <div className='pumpHeaderCon'>
          <button className='pumpHeaderButton'>+ Add Pumps</button> */}
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
          <Route
            path='/dashboard'
            render={prop => (
              <AgGridReact
                {...prop}
                columnDefs={fields.columnDefs}
                rowData={props.gridInfo}
                gridOptions={gridOptionss}
                // defaultColDef={this.state.defaultColDef}
                // rowSelection={this.state.rowSelection}
                // onGridReady={onGridReady}
                refreshCells={refreshCells}
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
