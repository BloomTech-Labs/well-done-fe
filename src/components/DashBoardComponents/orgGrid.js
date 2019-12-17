import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "./orgGrid.scss"
import "antd/dist/antd.css";
import gridOptions from "../Grid/Pagination";


class OrgGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Organization",
          field: "org_name",
          sortable: true,
          filter: true,
          
        },
        {
          headerName: "Headquarters",
          field: "headquarter_city",
          sortable: true,
          filter: true,
         
        },
        {
          headerName: "Contact",
          field: "name",
          sortable: true,
          filter: true,
         
        },
        {
          headerName: "Pumps Owned",
          field: "physical_id",
          sortable: true,
          filter: true,
         
        },
        {
          headerName: "Users",
          field: "operators",
          sortable: true,
          filter: true,
          
        },
        {
          headerName: "Date Joined",
          field: "created_at",
          sortable: true,
          filter: true,
          
        }
       ]
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    fetch(`${process.env.REACT_APP_HEROKU_API}/api/sensors`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`
      }
    })
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
      .catch(err => console.log(err));
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

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
  };
render() {
    return (
      <div className="orgGridBody">
        <div
        className="orgGridHeader">
        <h1>Organizations</h1>
        <button className='orgHeaderButton'>+ Add Organization</button>
        </div>
        <div
          className="ag-theme-balham"
          style={{
            height: "500px",
            width: "100%",
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
  
            onGridReady={this.onGridReady}
            onGridSizeChanged={this.onGridSizeChanged}
          />
        </div>
      </div>
    );
  }
}
export default OrgGrid;
