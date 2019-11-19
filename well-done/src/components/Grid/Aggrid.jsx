import React, { Component } from "react";
// import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import gridOptions from "./Pagination";
// import axios from 'axios';
// import { axiosWithAuth } from '../src/utilities/axiosWithAuth';
import AxiosWithAuth from "../AxiosWithAuth/axiosWithAuth";
import { AutoWidthCalculator } from "ag-grid-community";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Country",
          field: "org_name",
          sortable: true,
          filter: true,
          width: 125


        },
        {
          headerName: "Status",
          field: "status",
          sortable: true,
          filter: true,
          width: 90
        },
        {
          headerName: "Sensor ID",
          field: "physical_id",
          sortable: true,
          filter: true,
          width: 95

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
          width: 90
        },
        {
          headerName: "Commune",
          field: "commune_name",
          sortable: true,
          width: 90
        },
        // {
        //   headerName: "Last Upload",
        //   field: "last_upload",
        //   sortable: true,
        //   width: 90,
        //   type: "numericColumn"
        // },
        // {
        //   headerName: "Depth",
        //   field: "depth",
        //   sortable: true,
        //   width: 90,
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
        //   width: 90
        // }
        // {
        //   headerName: "Liters/Day",
        //   field: "liters_day",
        //   sortable: true,
        //   width: 90,
        //   type: "numericColumn"
        // },
        // {
        //   headerName: "Liters/Week",
        //   field: "liters_week",
        //   sortable: true,
        //   width: 90,
        //   type: "numericColumn"
        // }
      ]
    };
  }

  // componentDidMount() {
  //   fetch("http://dummy.restapiexample.com/api/v1/employees")
  //     .then(result => result.json())
  //     .then(rowData => this.setState({ rowData }));
  // }

  componentDidMount() {
    
    const token = localStorage.getItem('token');
    console.log(token);
    fetch("https://welldone-db.herokuapp.com/api/sensors/recent", {
      method: "GET",
      mode: 'cors',
      // credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`
      }
    })
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
      // .then(rowData =>  console.log(rowData))
      .catch(err => console.log(err));
  }

 
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "85%",
          marginTop: 15,
          marginLeft:100,
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          gridOptions={gridOptions}
        ></AgGridReact>
      </div>
    );
  }
}

export default Grid;


// 2 is working , 0 is Not Working, 1 is Unknown or Null