import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Dropdown, Form, ControlLabel, DropdownButton } from 'react-bootstrap'
import gridOptionss from '../../../components/Grid/Pagination'

class LogsFilters extends Component {
  onQuickFilterByStatus(props) {
    gridOptionss.api.setQuickFilter(document.getElementById('statusLogs').value)
  }
  onQuickFilterByOperator(props) {
    gridOptionss.api.setQuickFilter(document.getElementById('opLogs').value)
  }

  render() {
    return (
      <>
        <Form.Control
          as='select'
          id='statusLogs'
          name='statusDrop'
          onChange={this.onQuickFilterByStatus}
        >
          <option>Functioning</option>
          <option>Non-Functioning</option>
          <option>N/A</option>
        </Form.Control>

        <Form.Control
          as='select'
          id='opLogs'
          name='opLogs'
          onChange={this.onQuickFilterByStatus}
        >
          {this.props.ngo.map(log => (
            <option key={log.id} value={log.org_name}>
              {log.org_name}
            </option>
          ))}
        </Form.Control>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    ngo: state.logsReducer.logsUpdate,
  }
}
export default connect(mapStateToProps, {})(LogsFilters)
