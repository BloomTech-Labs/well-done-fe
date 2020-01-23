import React, { Component } from 'react'

import {useSelector} from 'react-redux'

import gridOptionss from '../../components/Grid/Pagination'

class RadioButtons extends Component {
  onQuickFilterByCompany() {
    gridOptionss.api.setQuickFilter(document.getElementById('company').value)
  }

  render() {
    return (

        <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Organization
              </Dropdown.Toggle>

              <Form.Control
                as='select'
                name='company'
                value={pump.org_id}
                onChange={this.onQuickFilterByCompany}
              >
                {orgReducer.map(org => (
                  <option key={org.id} value={org.id}>
                    {org.org_name}
                  </option>
                ))}
              </Form.Control>
    //   <div className='radioButtons'>
    //     <input
    //       type='radio'
    //       name='status'
    //       onChange={this.onQuickFilterByStatus3}
    //       value=''
    //       id='clear'
    //     />
    //     Clear
    //     <input
    //       type='radio'
    //       name='status'
    //       onChange={this.onQuickFilterByStatus}
    //       value='Functioning'
    //       id='radio'
    //     />{' '}
    //     Functioning
    //     <input
    //       type='radio'
    //       name='status'
    //       onChange={this.onQuickFilterByStatus1}
    //       value='Out-of-Service'
    //       id='radio1'
    //     />{' '}
    //     Out-of-Service
    //     <input
    //       type='radio'
    //       name='status'
    //       onChange={this.onQuickFilterByStatus2}
    //       value='Unknown'
    //       id='radio2'
    //     />
    //     Unknown
        
      </div>
    )
  }
}

export default RadioButtons
