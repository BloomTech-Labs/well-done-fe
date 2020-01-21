import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import CustomDateComponent from '../Filter/CustomDateCompnent'

import gridOptionss from '../Grid/Pagination'
import ViewButton from './ViewButton'
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
import { date } from 'yup'

class pumps extends Component {
  constructor(props) {
    super(props)

      this.state = {
      displayView: 0,   
      datesUpdate: '',  
      columnDefs: [
        {
          headerName: 'Sensor ID',
          field: 'physical_id',
          sortable: true,
          filter: true,
          filter: "agNumberColumnFilter",
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
          filter: "agDateColumnFilter",
          filterParams: {
            comparator: function(filterLocalDateAtMidnight, cellValue,) {


              var dateAsString = moment(cellValue).format('DD/MM/YYYY');
              var dateParts = dateAsString.split("/");
              var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
              if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
                return 0
              }
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
           
              }
              if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
            },
            // browserDatePicker: true
          }
         
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
      frameworkComponents: { agDateInput: CustomDateComponent },
 
    }
  }

     
   
  componentDidMount=()=> {

    // let gridInfoDate = this.props.gridInfo
    // console.log(gridInfoDate, 'CDM')
  }
  
  componentDidUpdate = () => {
    // let dateUpdate = this.props.sensors
    console.log('this is the sensors', this.props.sensors)
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
   userRole = localStorage.getItem('role')

  deleteDisplay = () => {
    if (this.userRole === 'super_user') {
      return (
        <button className='deleteBtn' onClick={() => this.viewHandler()}>
        <img src={deleteIcon} alt='delete'></img>
        </button>
      )
    } else {
      return (
        <button id='none' type='button'>
         </button>
      )
    }
  }

  onQuickFilterChanged() {
    gridOptionss.api.setQuickFilter(
      document.getElementById('quickFilter').value
    )
  }


  // onQuickFilterByCal() {

  //   let startDate = moment(document.getElementById('dateCal').value).format('MM/DD/YYYY');
  //   let endDate = moment(document.getElementById('compCal').value).format('MM/DD/YYYY');
  //   console.log(this.dateUpdate,'quickFilterCal')
    
    // if(startDate && endDate !== 'Invalid date'){
      
      // this.gridInfoDate.filter(date=> {
      //   let  compareDate = moment(date.created_at).format('MM/DD/YYYY')
  
      //   if(compareDate.isBetween(startDate, endDate)){

      //     return date
      //   }else{
      //     return false
      //   }
      // })
    // }

 

    // return gridOptionss.api.setQuickFilter(dateTogetherStart)
  // }

//   onQuickFilterByCal() {
//     let startDate = moment(document.getElementById('dateCal').value).format('MM/DD/YYYY');
//     let endDate = moment(document.getElementById('compCal').value).format('MM/DD/YYYY');

//     let startSplit = startDate.split("/");
//     let day = startSplit[0]
//     let month = startSplit[1]
//     let year = startSplit[2]
    
//     let endSplit = endDate.split("/");
//     let dayEnd = endSplit[0]
//     let monthEnd = endSplit[1]
//     let yearEnd = endSplit[2]
    
//     let dateNumberStart = Number(`${day}${month}${year}`)  
//     let dateNumberEnd = Number(`${dayEnd}${monthEnd}${yearEnd}`)

//     let dateTogetherStart = `${day}/${month}/${year}`  
//     let dateTogetherEnd =`${dayEnd}/${monthEnd}/${yearEnd}`

    
//     if(dateNumberStart > dateNumberEnd){
//       let greater = (dateNumberStart + dateNumberEnd)
//        console.log(greater,'greater')
//       //  return gridOptionss.api.setQuickFilter(greater)
//      }
    


//     if(dateTogetherStart === 'Invalid date/undefined/undefined'){
//       console.log(dateTogetherStart,'Start')
//       return gridOptionss.api.setQuickFilter('')
//     }else{
//       return gridOptionss.api.setQuickFilter(dateTogetherStart)
//   }
// }




  //  else if((dateNumberStart + dateNumberEnd) >= dateNumberEnd){
  //     return gridOptionss.api.setQuickFilter(dateTogetherStart + dateTogetherEnd)
  //   }

    // return gridOptionss.api.setQuickFilter(dateTogetherStart === 'Invalid date/undefined/undefined' ? '' : dateTogetherStart)



    // if(startDate && endDate === 'Invalid date'){
    //   return gridOptionss.api.setQuickFilter('')
    // }else if(startDate >= endDate){
    //   return gridOptionss.api.setQuickFilter(startDate + endDate)
    // }

  // }


  // onQuickFilterCalCompare() {
  //   let endDate = (document.getElementById('compCal').value);
  //   console.log(endDate,'Value')
  //   return gridOptionss.api.setQuickFilter(endDate === 'Invalid date' ? '' : endDate)
  // }


  

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
          <div className="calContainer">
            <input
              type='date'
              onChange={this.onQuickFilterByCal}
              id='dateCal'
              />
          </div>
          <div className="calContainerComp">
            <input
              type='date'
              onChange={this.onQuickFilterByCal}
              id='compCal'
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
