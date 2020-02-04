import React, { Component } from 'react'

import { connect } from 'react-redux'
import gridOptionss from '../../../components/Grid/Pagination'

class LogsFilters extends Component {
  onQuickFilterByStatus(props) {
    gridOptionss.api.setQuickFilter(document.getElementById('statusLogs').value)
  }
  onQuickFilterByOperator(props) {
    gridOptionss.api.setQuickFilter(document.getElementById('opLogs').value)
  }

  handleFocus = e => {
    e.target.value = ''
  }

  render() {
    return (
      <>
        <div className='monitorDropContainer'>
          <select
            name='Status'
            onFocus={this.handleFocus}
            onChange={this.onQuickFilterByStatus}
            id='statusLogs'
          >
            <option value=''>Status</option>
            <option value='Functioning'>Functioning</option>
            <option value='Non-Functioning'>Non-Functioning</option>
            <option value='N/A'>N/A</option>
          </select>

          <select
            name='opLogs'
            onFocus={this.handleFocus}
            onChange={this.onQuickFilterByOperator}
            id='opLogs'
          >
            <option value=''>NGO</option>
            {this.props.ngo.map(log => (
              <option key={log.id} value={log.org_name}>
                {log.org_name}
              </option>
            ))}
          </select>
        </div>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    ngo: state.orgReducer.org,
  }
}
export default connect(mapStateToProps, {})(LogsFilters)
