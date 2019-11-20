import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


import gridOptions from "./Pagination";
import AxiosWithAuth from "../AxiosWithAuth/axiosWithAuth";
import { AutoWidthCalculator } from "ag-grid-community";
import grid from "./grid.scss";
import getBooleanValue from "./boo";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      columnDefs: [
        {
          headerName: "Project",
          field: "org_name",
          sortable: true,
          filter: true,
          width: 125
        },
        {
          headerName: "Sensor ID",
          field: "physical_id",
          sortable: true,
          filter: true,
          width: 95
        },
        {
          headerName: "Status",
          field: "status",
          sortable: true,
          filter: true,
          width: 90
        },
        {
          headerName: "Province",
          field: "province_name",
          sortable: true,
          filter: true,
          width: 90
        },
        {
          headerName: "District",
          field: "district_name",
          sortable: true,
          filter: true,
          width: 90
        },
        {
          headerName: "Commune",
          field: "commune_name",
          sortable: true,
          filter: true,
          width: 90
        }
        // {
        //   headerName: "Depth",
        //   field: "depth",
        //   sortable: true,
        //   filter: true,
        // width: 90,
        //   type: "numericColumn"
        // },
        // {
        //   headerName: "Constructed",
        //   field: "constructed",
        //   sortable: true,
        //   width: 90
        // },
        // {
        //   headerName: "Cellular",
        //   field: "cellular",
        //   sortable: true,
        //   filter: true,
        //   width: 90
        // }
        // {
        //   headerName: "Liters/Day",
        //   field: "liters_day",
        //   sortable: true,
        //   filter: true,
        //   width: 90,
        //   type: "numericColumn"
        // },
        // {
        //   headerName: "Liters/Week",
        //   field: "liters_week",
        //   sortable: true,
        //   filter: true,
        //   width: 90,
        //   type: "numericColumn"
        // }
      ]
    };
  }

  
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    fetch("https://welldone-db.herokuapp.com/api/sensors/recent", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`
      }
    })
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
      // .then(rowData =>  console.log(rowData))
      .catch(err => console.log(err));
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    
  };
  // onBtExport() {
  //   var params = {
  //     // allColumns: getBooleanValue("#allColumns"),
  //     // onlySelected: getBooleanValue("#onlySelected"),
  //     // suppressQuotes: getBooleanValue("#suppressQuotes"),
  //     fileName: document.querySelector("#fileName").value,
  //     columnSeparator: document.querySelector("#columnSeparator").value
  //   };
  //   if (getBooleanValue("#customHeader")) {
  //     params.customHeader = "Test Header";
  //   }
  //   if (getBooleanValue("#customFooter")) {
  //     params.customFooter = "Test Footer";
  //   }
  //   this.gridApi.exportDataAsCsv(params);
  // }

  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   fetch("https://welldone-db.herokuapp.com/api/sensors/recent", {
  //     method: "GET",
  //     mode: "cors",
  //     // credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `${token}`
  //     }
  //   })
  //     .then(result => result.json())
  //     .then(rowData => this.setState({ rowData }))
  //     // .then(rowData =>  console.log(rowData))
  //     .catch(err => console.log(err));
  // }


  exportToCsv = function () {
    var params = {
        skipHeader: false,
        skipFooters: true,
        skipGroups: true,
        fileName: "OverviewGrid.csv"
    };
  gridOptions.api.exportDataAsCsv(params);
}

  render() {
    return (
      <div>
        <div
          className="ag-theme-balham"
          style={{
            height: "500px",
            width: "100%"
            // marginTop: 15
            // marginLeft: 100
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            gridOptions={gridOptions}

            modules={this.state.modules}
              defaultColDef={this.state.defaultColDef}
              showToolPanel={true}
              rowSelection={this.state.rowSelection}
              onGridReady={this.onGridReady}







          ></AgGridReact>
        </div>

        <label style={{ margin: "10px" }}>
          <button onClick={this.exportToCsv.bind(this)}>Export to CSV</button>
        </label>
      </div>
    );
  }
}

export default Grid;
