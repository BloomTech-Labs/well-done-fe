import React, { Component } from 'react'

import { connect } from 'react-redux'
import '../../MonitorsPage/Sensors.style.scss'

import gridOptionss from '../../../components/Grid/Pagination'

class NgoDropDown extends Component {
  onQuickFilterByCompany() {
    gridOptionss.api.setQuickFilter(document.getElementById('company').value)
  }

  handleFocus = e => {
    e.target.value = ''
  }

  render() {
    return (
      <>
        <select
          name='company'
          onFocus={this.handleFocus}
          onChange={this.onQuickFilterByCompany}
          id='company'
        >
          <option value=''>NGO</option>
          {this.props.ngos.map(log => (
            <option key={log.id} value={log.org_name}>
              {log.org_name}
            </option>
          ))}
        </select>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    ngos: state.orgReducer.org,
  }
}
export default connect(mapStateToProps, {})(NgoDropDown)
