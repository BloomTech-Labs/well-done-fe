import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import gridOptions from '../Grid/Pagination'

const Pumps = props => {
  const fields = {
    columnDefs: [
      {
        headerName: 'Project',
        field: 'org_name',
        sortable: true,
        filter: true,
        width: 125,
      },
      {
        headerName: 'Sensor ID',
        field: 'physical_id',
        sortable: true,
        filter: true,
        width: 95,
      },
      {
        headerName: 'Status',
        field: 'status',
        sortable: true,
        filter: true,
        width: 90,
      },
      {
        headerName: 'Province',
        field: 'province_name',
        sortable: true,
        filter: true,
        width: 90,
      },
      {
        headerName: 'District',
        field: 'district_name',
        sortable: true,
        filter: true,
        width: 90,
      },
      {
        headerName: 'Commune',
        field: 'commune_name',
        sortable: true,
        filter: true,
        width: 100,
      },
    ],
  }

  const [grid, setGrid] = useState(fields)

  console.log(grid, 'PUMPS COMP')

  return (
    <AgGridReact
      columnDefs={grid}
      // rowData={this.state.rowData}
      // gridOptions={gridOptions}
      // modules={this.state.modules}
      // defaultColDef={this.state.defaultColDef}
      // rowSelection={this.state.rowSelection}
      // onGridReady={this.onGridReady}
    />
  )
}

export default Pumps
