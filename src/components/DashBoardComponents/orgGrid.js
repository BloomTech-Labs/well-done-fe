import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import './orgGrid.scss'
import 'antd/dist/antd.css'
// import gridOptions from '../Grid/Pagination'
import gridOptions2 from '../Grid/gridOptions2'
import { AiOutlineSearch } from "react-icons/ai"
import OrgModal from './OrgModal'

class OrgGrid extends Component {

  constructor(props) {
    super(props)
    this.state = {

      columnDefs: [
        {
          headerName: 'Organization',
          field: 'org_name',
          sortable: true,
          filter: true,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Headquarters',
          field: 'headquarter_city',
          sortable: true,
          filter: true,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Contact',
          field: 'org_admin',
          sortable: true,
          filter: true,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Pumps Owned',
          field: 'pumps_owned',
          sortable: true,
          filter: true,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Users',
          field: 'org_users',
          sortable: true,
          filter: true,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'Date Joined',
          field: 'created_at',
          sortable: true,
          filter: true,
          cellStyle: {
            'font-size': '2rem',
            'padding-top': '.75rem',
          },
        },
      ],
    }
  }

  // process.env.REACT_APP_HEROKU_API}
  componentDidMount = () => {
    const token = localStorage.getItem('token')
    console.log(token)
    fetch(`${process.env.REACT_APP_HEROKU_API}/api/orgs`, {
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



  onQuickFilterChanged(params){ 
    gridOptions2.api.setQuickFilter(document.getElementById('quickFilters').value)
    console.log(gridOptions2, 'this is the grid api')
  }



  render() {
    return (
      <div className='orgGridBody'>
        <div className='orgGridHeader'>
          <h1>Organizations</h1>
      <div className="inputContainer">

          <input
            className='searchAccounts'
            type='text'
            onInput={this.onQuickFilterChanged}
            id='quickFilters'
            placeholder='Search'
   

          />
            <AiOutlineSearch size={24} style={{ position: "relative", right:"28px",top:"2px", background:"transparent" }} />
              </div>  
       
    
          <div className='modal'>
            {/* <OrgModal /> */}
           
          </div>
        </div>
        <div
          className='ag-theme-balham'
          style={{
            height: '500px',
            width: '100%',
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            gridOptions={gridOptions2}
            onGridReady={this.onGridReady}
            onGridSizeChanged={this.onGridSizeChanged}
          />
        </div>
      </div>
    )
  }
}
export default OrgGrid
