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
          headerName: "Pumps Owned",
          field: "pump",
          sortable: true,
          filter: true,
         
        },
        {
          headerName: "Pumps Operational",
          field: "active_pumps",
          sortable: true,
          filter: true,
         
        },
        {
          headerName: "Active Users",
          field: "active_users",
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
      // .then(rowData =>  console.log(rowData))
      .catch(err => console.log(err));
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };


  render() {
    return (
      <div className="orgGridBody">
        <div
        className="orgGridHeader">
        <h1>Organizations</h1>
        <h1>+ Add New Organization</h1>
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
            gridOptions={gridOptions}
            modules={this.state.modules}
            defaultColDef={this.state.defaultColDef}
            rowSelection={this.state.rowSelection}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}

export default OrgGrid;
