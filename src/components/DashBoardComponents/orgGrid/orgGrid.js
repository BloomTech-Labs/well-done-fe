import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import './orgGrid.scss'
import 'antd/dist/antd.css'
import gridOptions2 from '../../Grid/gridOptions2'
import { AiOutlineSearch } from 'react-icons/ai'
import OrgModal from '../OrgModal'
import { orgGridColumns } from './orgGridColumns'
import ViewOrgGrid from '../OrgView'
import Archivebutton from 'icons/Archivebutton.svg'
import deleteIcon from 'icons/DeleteModeButton.svg'

import { deleteOrg, fetchOrg } from '../../../actions/orgAction'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import DeleteOrg from '../DeleteOrg'

class OrgGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayView: 0,
      columnDefs: [
        ...orgGridColumns,
        {
          headerName: '',
          field: 'view',
          sortable: true,
          filter: true,
          cellRendererFramework: params => {
            return (
              <div>
                {this.state.displayView === 0 ? (
                  <ViewOrgGrid
                    api={params}
                    data={params.data}
                    otherProps={this.props}
                    editOrganization={this.props.editOrganization}
                  />
                ) : (
                  <DeleteOrg
                    params={params}
                    data={params.data}
                    otherProps={this.props}
                    deleteOrg={this.props.deleteOrg}
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
    this.props.fetchOrg()
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

  viewHandler = () => {
    if (this.state.displayView === 0) {
      this.setState({ displayView: 1 })
    } else {
      this.setState({ displayView: 0 })
    }
    this.gridApi.redrawRows()
  }

  onQuickFilterChanged(params) {
    gridOptions2.api.setQuickFilter(
      document.getElementById('quickFilters').value
    )
  }

  exportToCsv = function() {
    var params = {
      skipHeader: false,
      skipFooters: true,
      skipGroups: true,
      fileName: 'OverviewGrid.csv',
    }
    gridOptions2.api.exportDataAsCsv(params)
  }

  render() {
    return (
      <div className='orgGridBody'>
        <div className='orgGridHeader'>
          <h1>Organizations</h1>
          <div className='inputContainer'>
            <input
              className='searchAccounts'
              type='text'
              onInput={this.onQuickFilterChanged.bind(this)}
              id='quickFilters'
              placeholder='search...'
            />
            <AiOutlineSearch
              size={24}
              style={{
                position: 'relative',
                right: '28px',
                bottom: '5px',
                background: 'transparent',
              }}/>
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
            <button className='deleteBtn' onClick={() => this.viewHandler()}>
              <img src={deleteIcon} alt='download'></img>
            </button>
            <div className='modalHeaderOrg'>
              <OrgModal />
            </div>
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
            rowData={this.props.orgReducer}
            gridOptions={gridOptions2}
            onGridReady={this.onGridReady}
            onGridSizeChanged={this.onGridSizeChanged}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orgReducer: state.orgReducer.org,
  }
}

export default connect(mapStateToProps, { deleteOrg, fetchOrg })(
  withRouter(OrgGrid)
)
