import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import { css } from 'emotion'
import { Button } from 'antd'
import 'antd/dist/antd.css'

import { AiOutlineSearch } from 'react-icons/ai'

import gridOptions from './Pagination'

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columnDefs: [
        {
          headerName: 'Project',
          field: 'org_name',
          sortable: true,
          filter: true,
          minWidth: 125,
        },
        {
          headerName: 'Sensor ID',
          field: 'physical_id',
          sortable: true,
          filter: true,
          minWidth: 95,
        },
        {
          headerName: 'Status',
          field: 'status',
          sortable: true,
          filter: true,
          minWidth: 90,
        },
        {
          headerName: 'Province',
          field: 'province_name',
          sortable: true,
          filter: true,
          minWidth: 90,
        },
        {
          headerName: 'District',
          field: 'district_name',
          sortable: true,
          filter: true,
          minWidth: 90,
        },
        {
          headerName: 'Commune',
          field: 'commune_name',
          sortable: true,
          filter: true,
          minWidth: 100,
        },
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
      ],
      sensors: [],
      search: '',
    }
  }

  // componentDidMount = () => {
  //   const token = localStorage.getItem('token')
  //   console.log(token)
  //   fetch(`${process.env.REACT_APP_HEROKU_API}/api/sensors/recent`, {
  //     method: 'GET',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `${token}`,
  //     },
  //   })
  //     .then(result => result.json())
  //     // .then(rowData => this.setState({ rowData }))
  //     .then(rowData => console.log(rowData, 'ROWDATA'))
  //   //   .catch(err => console.log(err))
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({ ...this.state, sensors: this.props.sensors })

      if (this.state.sensors.length > 0) {
        this.addStringToStatus()
      }
    }

    if (prevState.sensors.length !== this.state.sensors.length) {
      this.addStringToStatus()
    }
  }

  addStringToStatus() {
    this.setState({
      sensors: this.state.sensors.map(item => {
        if (item.status === null) {
          return (item = { ...item, status: 'N/A' })
        } else {
          return item
        }
      }),
    })
  }

  taskFilter = filteredItem => {
    console.log(filteredItem, 'filtered item here')
    filteredItem = filteredItem.trim()
    this.setState({
      sensors: this.state.sensors.filter(item => {
        if (item.status === null) {
          return (item.status = 'N/A')
        } else if (
          item.province_name
            .toLowerCase()
            .includes(filteredItem.toLowerCase()) ||
          item.org_name.toLowerCase().includes(filteredItem.toLowerCase()) ||
          item.district_name
            .toLowerCase()
            .includes(filteredItem.toLowerCase()) ||
          item.commune_name
            .toLowerCase()
            .includes(filteredItem.toLowerCase()) ||
          item.physical_id.toString().indexOf(filteredItem) !== -1 ||
          item.status
            .toString()
            .toLowerCase()
            .indexOf(filteredItem.toLowerCase()) !== -1
        ) {
          console.log(item)
          return item
        }
      }),
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitSearch = e => {
    e.preventDefault()
    this.setState({ search: '' })
    this.taskFilter(this.state.search)
  }

  reset = e => {
    e.preventDefault()
    this.setState({ sensors: this.props.sensors })
  }

  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
  }

  exportToCsv = function() {
    var params = {
      skipHeader: false,
      skipFooters: true,
      skipGroups: true,
      fileName: 'OverviewGrid.csv',
    }
    gridOptions.api.exportDataAsCsv(params)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <input
            type='text'
            name='search'
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type='submit'>
            {' '}
            <AiOutlineSearch />{' '}
          </button>
        </form>
        <button onClick={e => this.reset(e)}>Reset</button>
        <Button
          type='default'
          icon='download'
          size='small'
          onClick={this.exportToCsv.bind(this)}
        >
          CSV
        </Button>
        <div
          className='ag-theme-balham'
          style={{
            height: '500px',
            width: '750px',
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.sensors}
          />
        </div>
      </div>
    )
  }
}

export default Grid
