import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { css } from "emotion";
import { Button } from "antd";
import "antd/dist/antd.css";

import gridOptions from "./Pagination";

import AddAccount from '../../components/AddOperator'

import Example from '../../components/modalOrganization'



class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "id",
          field: "id",
          sortable: true,
          filter: true,
          width: 40
        },
        {
          headerName: "First Name",
          field: "first_name",
          sortable: true,
          filter: true,
          width: 120
        },
        {
          headerName: "Last Name",
          field: "last_name",
          sortable: true,
          filter: true,
          width: 120
        },
        {
          headerName: "Eamil",
          field: "email_address",
          sortable: true,
          filter: true,
          width: 200
        },
        {
          headerName: "Mobile",
          field: "mobile_number",
          sortable: true,
          filter: true,
          width: 120
        },
        {
          headerName: "Super User",
          field: "super_user",
          sortable: true,
          filter: true,
          width: 100
        },
        {
            headerName: "Org User",
            field: "org_user",
            sortable: true,
            filter: true,
            width: 100
          },
          {
            headerName: "Org Admin",
            field: "org_admin",
            sortable: true,
            filter: true,
            width: 100
          }
      ]
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    fetch(`${process.env.REACT_APP_HEROKU_API}/api/accounts`, {
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
        <Button
          type="default"
          icon="download"
          size="small"
          onClick={this.exportToCsv.bind(this)}
        >
          CSV
        </Button>

        <div
          className="ag-theme-balham"
          style={{
            height: "400px",
            width: "900px"
          }}
        >
            <Example/>
            
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

export default Grid;