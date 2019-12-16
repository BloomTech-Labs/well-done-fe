import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { css } from "emotion";
import { Button } from "antd";
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
          width: 90
        },
        {
          headerName: "Headquarters",
          field: "headquarter_city",
          sortable: true,
          filter: true,
          width: 95
        },
        {
          headerName: "Pumps Owned",
          field: "pumps_owned",
          sortable: true,
          filter: true,
          width: 90
        },
        {
          headerName: "Pumps Operational",
          field: "active_pumps",
          sortable: true,
          filter: true,
          width: 90
        },
        {
          headerName: "Active Users",
          field: "active_users",
          sortable: true,
          filter: true,
          width: 90
        },
        {
          headerName: "Date Joined",
          field: "created_at",
          sortable: true,
          filter: true,
          width: 100
        }
       
      ]
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    fetch(`${process.env.REACT_APP_HEROKU_API}/api/pumps`, {
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

  exportToCsv = function() {
    var params = {
      skipHeader: false,
      skipFooters: true,
      skipGroups: true,
      fileName: "OverviewGrid.csv"
    };
    gridOptions.api.exportDataAsCsv(params);
  };

  render() {
    return (
      <div>
        <div
        className="orgGridHeader">
        <h1>Organizations</h1>
        <Button
          type="default"
          icon="download"
          size="small"
          onClick={this.exportToCsv.bind(this)}
        >
          Open in Excel
        </Button>
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
