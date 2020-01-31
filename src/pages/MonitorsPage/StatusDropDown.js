import React, { Component } from 'react'

import { connect } from 'react-redux'

import gridOptionss from '../../components/Grid/Pagination'
import './Sensors.style.scss'

class StatusDropDown extends Component {
  onQuickFilterByStatus(props) {
    gridOptionss.api.setQuickFilter(document.getElementById('statusDrop').value)
  }

  handleFocus = e => {
    e.target.value = ''
  }

  render() {
    return (
      <>
        <select
          name='Status'
          onFocus={this.handleFocus}
          onChange={this.onQuickFilterByStatus}
          id='statusDrop'
        >
          <option value=''>Status</option>
          <option value='Functioning'>Functioning</option>
          <option value='Non-Functioning'>Non-Functioning</option>
          <option value='N/A'>N/A</option>
        </select>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    status: state.sensorReducer.gridInfo,
  }
}
export default connect(mapStateToProps, {})(StatusDropDown)
