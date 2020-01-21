import React, { Component } from 'react'

import gridOptionss from '../../components/Grid/Pagination'

class RadioButtons extends Component {
  onQuickFilterByStatus() {
    gridOptionss.api.setQuickFilter(document.getElementById('radio').value)
  }

  onQuickFilterByStatus1() {
    gridOptionss.api.setQuickFilter(document.getElementById('radio1').value)
  }

  onQuickFilterByStatus2() {
    gridOptionss.api.setQuickFilter(document.getElementById('radio2').value)
  }

  onQuickFilterByStatus3() {
    gridOptionss.api.setQuickFilter(document.getElementById('clear').value)
  }
  render() {
    return (
      <div className='radioButtons'>
        <input
          type='radio'
          name='status'
          onChange={this.onQuickFilterByStatus3}
          value=''
          id='clear'
        />
        Clear
        <input
          type='radio'
          name='status'
          onChange={this.onQuickFilterByStatus}
          value='Functioning'
          id='radio'
        />{' '}
        Functioning
        <input
          type='radio'
          name='status'
          onChange={this.onQuickFilterByStatus1}
          value='Out-of-Service'
          id='radio1'
        />{' '}
        Out-of-Service
        <input
          type='radio'
          name='status'
          onChange={this.onQuickFilterByStatus2}
          value='Unknown'
          id='radio2'
        />
        Unknown
      </div>
    )
  }
}

export default RadioButtons
