import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import CustomDateComponent from '../../components/Filter/CustomDateCompnent'

import gridOptionss from '../../components/Grid/Pagination'
import ViewButton from '../../components/DashBoardComponents/ViewButton'
import './Sensors.style.scss'

import TrashCan from './TrashCan'

import { AiOutlineSearch } from 'react-icons/ai'
import SensorsModal from './SensorsModal'
import moment from 'moment'

//redux
import { connect } from 'react-redux'
import { deleteSensor } from '../../actions/sensorActions'

import deleteIcon from '../../icons/DeleteModeButton.svg'
import Archivebutton from '../../icons/Archivebutton.svg'

class pumps extends Component {
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
          headerName: 'Installed',
          field: 'created_at',
          // sortable: true,
          filter: true,
          minWidth: 90,
          cellStyle: {
            'font-size': '1.5rem',
            'padding-top': '.75rem',
          },
          filter: 'agDateColumnFilter',
          filterParams: {
            comparator: function(filterLocalDateAtMidnight, cellValue) {
              var dateAsString = moment(cellValue).format('DD/MM/YYYY')
              var dateParts = dateAsString.split('/')
              var cellDate = new Date(
                Number(dateParts[2]),
                Number(dateParts[1]) - 1,
                Number(dateParts[0])
              )
              if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
                return 0
              }
              if (cellDate < filterLocalDateAtMidnight) {
                return -1
              }
              if (cellDate > filterLocalDateAtMidnight) {
                return 1
              }
            },
            // browserDatePicker: true
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
          // sortable: true,
          // filter: true,
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
      // frameworkComponents: { agDateInput: CustomDateComponent },
      defaultColDef: { filter: true },
      sideBar: 'filters',
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
  }
  userRole = localStorage.getItem('role')

  deleteDisplay = () => {
    if (this.userRole === 'super_user') {
      return (
        <button className='deleteBtn' onClick={() => this.viewHandler()}>
          <img src={deleteIcon} alt='delete'></img>
        </button>
      )
    } else {
      return <button id='none' type='button'></button>
    }
  }

  onQuickFilterChanged() {
    gridOptionss.api.setQuickFilter(
      document.getElementById('quickFilter').value
    )
  }
  onQuickFilterByCal() {
    let dateInput = moment(document.getElementById('dateCal').value).format(
      'MM/DD/YYYY'
    )
    console.log(dateInput, 'Value')
    return gridOptionss.api.setQuickFilter(
      dateInput === 'Invalid date' ? '' : dateInput
    )

    // if(dateInput === 'Invalid date'){
    //   return gridOptionss.api.setQuickFilter('')
    // }else{
    //   return gridOptionss.api.setQuickFilter(dateInput)
    //  }
  }

  onQuickFilterByStatus(){
    gridOptionss.api.setQuickFilter(document.getElementById('radio').value)

  }

  onQuickFilterByStatus1(){
    gridOptionss.api.setQuickFilter(document.getElementById('radio1').value)
  }

  onQuickFilterByStatus2(){
    gridOptionss.api.setQuickFilter(document.getElementById('radio2').value)
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
              onChange={this.onQuickFilterChanged}
              id='quickFilter'
              placeholder=' search...'
            />
            <AiOutlineSearch className='searchIcon' />
          </div>
          <div className='calContainer'>
            <input
              type='date'
              onChange={this.onQuickFilterByCal}
              id='dateCal'
            />
          </div>
          <div className='radioButtons'>
            <input
              type='radio'
              name='status'
              onChange={this.onQuickFilterByStatus}
              value="Functioning"
              id='radio'
              checked={this.state.checked}
              /> Functioning
              <input
              type='radio'
              name='status'
              onChange={this.onQuickFilterByStatus1}
              value="Out-of-Service"
              id='radio1'
             
              /> Out-of-Service
              <input
              type='radio'
              name='status'
              onChange={this.onQuickFilterByStatus2}
              value="Unknown"
              id='radio2'
             
              />Unknown
          </div>
          <div>
          {/* <form>
        <div className="radio">
          <label>
            <input type="radio" value="Functioning" id='radio' />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Out-of-Service" id='radio'/>
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Unknown" id='radio'/>
            Option 3
          </label>
        </div>
      </form> */}
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

            {this.deleteDisplay()}

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
              floatingFilter={true}
              sideBar={this.state.sideBar}
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
