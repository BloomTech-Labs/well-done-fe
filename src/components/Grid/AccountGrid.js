import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'antd/dist/antd.css'

import gridOptions from './Pagination'

import ModalOperator from '../../components/ModalTest'

import './accountGrid.scss'

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columnDefs: [
        {
          headerName: 'id',
          field: 'id',
          sortable: true,
          filter: true,
          width: 40,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Organization',
          field: 'organization',
          sortable: true,
          filter: true,
          width: 150,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'First Name',
          field: 'first_name',
          sortable: true,
          filter: true,
          width: 120,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Last Name',
          field: 'last_name',
          sortable: true,
          filter: true,
          width: 120,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Eamil',
          field: 'email_address',
          sortable: true,
          filter: true,
          width: 200,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Mobile',
          field: 'mobile_number',
          sortable: true,
          filter: true,
          width: 150,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Sensor',
          field: 'sensor',
          sortable: true,
          filter: true,
          width: 120,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Super User',
          field: 'super_user',
          sortable: true,
          filter: true,
          width: 100,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Org User',
          field: 'org_user',
          sortable: true,
          filter: true,
          width: 100,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Org Admin',
          field: 'org_admin',
          sortable: true,
          filter: true,
          width: 100,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
      ],
    }
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token')
    fetch(`${process.env.REACT_APP_HEROKU_API}/api/accounts`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
      .catch(err => console.log(err))
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

  exportToCsv = function() {
    var params = {
      skipHeader: false,
      skipFooters: true,
      skipGroups: true,
      fileName: 'OverviewGrid.csv',
    }
    gridOptions.api.exportDataAsCsv(params)
  }

  //filter function
  onQuickFilterChanged(params) {
    gridOptions.api.setQuickFilter(document.getElementById('quickFilter').value)
  }

  render() {
    return (
      <div>
        <div className='accountBody'>
          <div className='accountHeader'>
            <h1>Accounts</h1>

            <input
              className='searchAccounts'
              type='text'
              onInput={this.onQuickFilterChanged}
              id='quickFilter'
              placeholder=' search...'
            />

            <div className='modal'>
              <ModalOperator />
            </div>
          </div>

          <div
            id='grid-wrapper'
            style={{
              height: '500px',
              width: '100%',
            }}
            className='ag-theme-balham'
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              gridOptions={gridOptions}
              modules={this.state.modules}
              defaultColDef={this.state.defaultColDef}
              rowSelection={this.state.rowSelection}
              onGridSizeChanged={this.onGridSizeChanged}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Grid
