
import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import gridOptions from '../Grid/Pagination'
import './pumps.style.scss'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchSensors } from '../../actions/sensorActions'

const Pumps = props => {
const [rowSelection]= useState("multiple")

//grid style options
gridOptions.rowHeight = 40

  const fields = {
    columnDefs: [
      {
        headerName: 'Sensor ID',
        field: 'physical_id',
        sortable: true,
        filter: true,
        minWidth: 95,
        checkboxSelection: true,
        headerCheckboxSelection: true,
        
      },
      {
        headerName: 'Installed',
        field: 'created_at',
        sortable: true,
        filter: true,
        minWidth: 90,
      },
      {
        headerName: 'Status',
        field: 'status',
        sortable: true,
        filter: true,
        minWwidth: 90,
      },
      {
        headerName: 'NGO',
        field: 'org_name',
        sortable: true,
        filter: true,
        minWidth: 90,
      },
     
    ],
  }
  const [grid, setGrid] = useState([])
  const sensorSelector = useSelector(state => state.sensorReducer)
  const dispatch = useDispatch()




  useEffect(() => {
    dispatch(fetchSensors())
  }, [])
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
//selection function to highlight row and print physical_id
  // function onSelectionChanged(params) {
  //   let selectedRows = params.api.getSelectedRows();
  //   document.querySelector("#selectedRows").innerHTML = selectedRows.length === 1 ? selectedRows[0].physical_id  : "";
  // }

  const onSelectionChanged = (params) => {
    let selectedRows = params.api.getSelectedRows();
    let selectedRowsString = "";
    let maxToShow = 5;
    selectedRows.forEach(function(selectedRow, index) {
      if (index >= maxToShow) {
        return;
      }
      if (index > 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow.physical_id;
    });
    if (selectedRows.length > maxToShow) {
      var othersCount = selectedRows.length - maxToShow;
      selectedRowsString += " and " + othersCount + " other" + (othersCount !== 1 ? "s" : "");
    }
    document.querySelector("#selectedRows").innerHTML = selectedRowsString;
  }

 const onGridReady = params => {
    params.gridApi = params.api;

  }

// FIXME:  //filter function
const onQuickFilterChanged=(params)=>  {
  params.AgGridReact.setQuickFilter(document.getElementById("quickFilter").value);
  console.log(params.AgGridReact,'this is the params')
  }


  return (
    <>
    <input 
    type="text"
    onInput={()=> onQuickFilterChanged()}
    id="quickFilter"
    placeholder="search..."
    
    />
      Sensor ID:
            <span id="selectedRows"></span>
    <div className='pumpCon'>
      <div className='pumpChart'>
        <div className='pumpHeader'>
          <div className='pumpHeaderName'>Pumps</div>
          <button className='pumpHeaderButton'>+ Add Pumps</button>
        </div>
        <div id='grid-wrapper' style={{ width: '100%', height: '100%' }}>
          <div
            id='myGrid'
            style={{
              height: '500px',
              width: '100%',
            }}
            className='ag-theme-balham'
          >
            <AgGridReact
              columnDefs={fields.columnDefs}
              rowData={sensorSelector.sensors}
              gridOptions={gridOptions}
              // defaultColDef={this.state.defaultColDef}
              // rowSelection={this.state.rowSelection}
              onGridReady={onGridReady}
              onGridSizeChanged={onGridSizeChanged}
              onSelectionChanged={onSelectionChanged}
              rowSelection={rowSelection}
              rowMultiSelectWithClick={true}
             
            />
          </div>
        </div>
      </div>
      <div className='pumpChart'>
        <div className='pumpHeader'>
          <div className='pumpHeaderName'>Pumps</div>
          <button className='pumpHeaderButton'>+ Add Pumps</button>
        </div>
        <div id='grid-wrapper' style={{ width: '100%', height: '100%' }}>
          <div
            id='myGrid'
            style={{
              height: '500px',
              width: '100%',
            }}
            className='ag-theme-balham'
          >
            <AgGridReact
              columnDefs={fields.columnDefs}
              rowData={sensorSelector.sensors}
              gridOptions={gridOptions}
              // defaultColDef={this.state.defaultColDef}
              // rowSelection={this.state.rowSelection}
              // onGridReady={onGridReady}
              onGridSizeChanged={onGridSizeChanged}
            
              //comment
              //comment
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Pumps