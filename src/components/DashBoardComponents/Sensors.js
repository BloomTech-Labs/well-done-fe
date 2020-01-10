import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

import gridOptionss from '../Grid/Pagination'
import ViewButton from './ViewButton'
import './Sensors.style.scss'

import TrashCan from './TrashCan'

import { AiOutlineSearch } from 'react-icons/ai'
import SensorsModal from './SensorsModal'

//redux
import { connect } from 'react-redux'
import { deleteSensor } from '../../actions/sensorActions'

import Archivebutton from '../../icons/Archivebutton.svg'

class pumps extends Component {
  constructor(props) {
    super(props)
    console.log('propsssss', this.props)
    this.state = {
      displayView: 0,
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
          maxWidth: 90,
          cellStyle: {
            'font-size': '1.5rem',
            'padding-top': '.75rem',
          },
        },
        {
          headerName: 'view',
          field: 'view',
          sortable: true,
          filter: true,
          cellRendererFramework: params => {
            return (
              <div>
                {this.state.displayView === 0 ? (
                  <ViewButton
                    selectedPump={this.props.selectedPump}
                    setSelectedPump={this.props.setSelectedPump}
                    data={params.data}
                    otherProps={this.props}
                  />
                ) : (
                  <TrashCan
                    selectedPump={this.props.selectedPump}
                    setSelectedPump={this.props.setSelectedPump}
                    data={params.data}
                    otherProps={this.props}
                    deleteSensor={this.props.deleteSensor}
                    params={params}
                  />
                )}
              </div>
            )
          },
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
    }
  }

  // process.env.REACT_APP_HEROKU_API}
  componentDidMount = () => {}

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
    console.log('working', this.state.displayView)
  }

  onQuickFilterChanged(params) {
    gridOptionss.api.setQuickFilter(
      document.getElementById('quickFilter').value
    )
  }
  exportToCsv = function() {
    var params = {
      skipHeader: false,
      skipFooters: true,
      skipGroups: true,
      fileName: 'OverviewGrid.csv',
    }
    gridOptionss.api.exportDataAsCsv(params)
  }

  render() {
    return (
      <div className='sensorChart'>
        <div className='sensorHeader'>
          <div className='sensorHeaderName'>
            <h1>Sensors</h1>
          </div>
          <div className='searchContainer'>
            <input
              className='searchInsensors'
              type='text'
              onInput={this.onQuickFilterChanged}
              id='quickFilter'
              placeholder=' search...'
            />
            <AiOutlineSearch className='searchIcon' />
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
              <i className='icon-trash'></i>
            </button>

            <div className='modalHeader'>
              <SensorsModal />
            </div>
          </div>
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
              history={this.props.history}
              columnDefs={this.state.columnDefs}
              rowData={this.props.gridInfo}
              gridOptions={gridOptionss}
              context={this.state.columnDefs.context}
              frameworkComponents={this.state.columnDefs.frameworkComponents}
              onGridSizeChanged={this.onGridSizeChanged}
              onGridReady={this.onGridReady}
            />
          </div>
        </div>
      </div>
    )
  }
}
// export default pumps
const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { deleteSensor })(withRouter(pumps))
