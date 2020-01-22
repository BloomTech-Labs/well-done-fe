import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Dropdown, Form } from 'react-bootstrap'

import gridOptionss from '../../components/Grid/Pagination'

class NgoDropDown extends Component {
  onQuickFilterByCompany() {
    gridOptionss.api.setQuickFilter(document.getElementById('company').value)
  }

  render() {
    return (
      <>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Organization
        </Dropdown.Toggle>

        <Form.Control
          as='select'
          id='company'
          name='company'
          value={'company'}
          onChange={this.onQuickFilterByCompany}
        >
          {this.props.ngos.map(org => (
            <option key={org.id} value={org.id}>
              {org.org_name}
            </option>
          ))}
        </Form.Control>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    ngos: state.orgReducer.org,
  }
}
export default connect(
    mapStateToProps, {})
    (NgoDropDown)
