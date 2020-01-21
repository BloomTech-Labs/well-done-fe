import React, { Component } from 'react'

import { AgGridReact } from 'ag-grid-react'
import gridOptionss from '../../components/Grid/Pagination'

class SensorsWithOutHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayView: 0,
      columnDefs: [
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
          headerName: 'NGO',
          field: 'org_name',
          sortable: true,
          filter: true,
          maxWidth: 90,
          cellStyle: {
            'font-size': '1.5rem',
            'padding-top': '.75rem',
          },
        },
      ],
    }
  }

  sensorsWithOutHistoryFunction = () => {
    let gIWO = this.props.gridInfoWithOutHistory
    let gIWH = this.props.gridInfo

    let WithoutHistory = []
    let WithHistory = []

    for (let i = 0; i < gIWO.length; i++) {
      WithoutHistory.push(gIWO[i].physical_id)
    }
    for (let i = 0; i < gIWH.length; i++) {
      WithHistory.push(gIWH[i].physical_id)
    }

    let physical_IDWOH = WithoutHistory.filter(
      item => !WithHistory.includes(item)
    )
    console.log(gIWO)
    console.log(physical_IDWOH)

    let sensorsWOH = []

    gIWO.filter(item => {
      physical_IDWOH.forEach(items => {
        if (item.physical_id === items) {
          sensorsWOH.push(item)
        }
      })
    })

    console.log(sensorsWOH, 'sWOH')
    return sensorsWOH
  }

  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
  }

  onGridSizeChanged = params => {
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

  render() {
    return (
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
            history={this.props.history}
            columnDefs={this.state.columnDefs}
            rowData={this.sensorsWithOutHistoryFunction()}
            gridOptions={gridOptionss}
            context={this.state.columnDefs.context}
            frameworkComponents={this.state.columnDefs.frameworkComponents}
            onGridSizeChanged={this.onGridSizeChanged}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    )
  }
}

export default SensorsWithOutHistory
