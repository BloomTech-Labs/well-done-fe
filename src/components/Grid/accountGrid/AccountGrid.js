import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'antd/dist/antd.css'

import ModalOperator from '../../AccountsModal'
import gridOptions3 from '../gridOptions3'

import { withRouter } from 'react-router'

import { AiOutlineSearch } from 'react-icons/ai'

import Archivebutton from 'icons/Archivebutton.svg'
import './accountGrid.scss'

import EditGrid from '../EditGrid'
import { fetchAccounts } from '../../../actions/accountAction'
import { accountColumns } from './accountGridColumn'
//redux
import { connect } from 'react-redux'
import { editAccount } from '../../../actions/accountAction'

import DeleteAccount from './DeleteAccount'
import { deleteAccount, fetchOrgAccounts } from 'actions/accountAction.js'

import deleteIcon from 'icons/DeleteModeButton.svg'

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayView: 0,
      columnDefs: [
        ...accountColumns,
        {
          headerName: '',
          field: 'Edit',
          sortable: true,
          filter: true,
          width: 60,
          cellRendererFramework: params => {
            return (
              <div id='editDelete'>
                {this.state.displayView === 0 ? (
                  <EditGrid
                    api={params}
                    data={params.data}
                    otherProps={this.props}
                    editAccount={this.props.editAccount}
                  />
                ) : (
                  <DeleteAccount
                    params={params}
                    data={params.data}
                    otherProps={this.props}
                    deleteAccount={this.props.deleteAccount}
                  />
                )}
              </div>
            )
          },
        },
      ],
    }
  }

  componentDidMount = () => {
    if (this.props.userRole === 'super_user') {
      this.props.fetchAccounts()
    } else {
      this.props.fetchOrgAccounts(this.props.orgId)
    }
    const role = localStorage.getItem('role')
    if (role === 'operator') {
      document.getElementById('modalHeaderAccount').style.display = 'none'
      document.getElementById('deleteBtn').style.display = 'none'
    } else {
      document.getElementById('modalHeaderAccount').style.display = 'block'
      document.getElementById('deleteBtn').style.display = 'block'
    }
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

  exportToCsv = function() {
    var params = {
      skipHeader: true,
      skipFooters: true,
      skipGroups: true,
      fileName: 'OverviewGrid.csv',
    }
    gridOptions3.api.exportDataAsCsv(params)
  }

  viewHandler = () => {
    if (this.state.displayView === 0) {
      this.setState({ displayView: 1 })
    } else {
      this.setState({ displayView: 0 })
    }
    this.gridApi.redrawRows()
  }

  // filter function
  onQuickFilterChanged(params) {
    gridOptions3.api.setQuickFilter(
      document.getElementById('quickFilterss').value
    )
  }

  render() {
    return (
      <div>
        <div className='accountBody'>
          <div className='accountHeader'>
            <h1>Accounts</h1>
            <div className='searchContainer'>
              <input
                className='searchAccounts'
                type='text'
                onInput={this.onQuickFilterChanged.bind(this)}
                id='quickFilterss'
                placeholder=' search...'
              />
              <AiOutlineSearch
                size={24}
                style={{
                  position: 'relative',
                  right: '28px',
                  bottom: '5px',
                  background: 'transparent',
                }}
              />
            </div>
            <div className='headerBtns'>
              <button
                className='downloadButton'
                type='default'
                icon='download'
                size='small'
                onClick={this.exportToCsv.bind(this)}
              >
                <img src={Archivebutton} alt='download'></img>
              </button>

              <button id='deleteBtn' onClick={() => this.viewHandler()}>
                <img src={deleteIcon} alt='delete'></img>
              </button>
              <div id='modalHeaderAccount'>
                <ModalOperator />
              </div>
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
              rowData={this.props.accountReducer}
              gridOptions={gridOptions3}
              onGridSizeChanged={this.onGridSizeChanged}
              onGridReady={this.onGridReady}
            />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    accountReducer: state.accountReducer.accounts,
  }
}

export default connect(mapStateToProps, {
  editAccount,
  fetchAccounts,
  deleteAccount,
  fetchOrgAccounts,
})(withRouter(Grid))
