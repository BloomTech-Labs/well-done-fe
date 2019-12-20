import React from 'react'

export default ({ close }) => (
  <div className='modal'>
    <a className='close' onClick={close}>
      &times;
    </a>
    <div className='header'> What do these statuses mean?</div>
    <div className='content'>
      {' '}
      <h4>Functional</h4>A sensor is currently online and providing accurate
      data.
      <h4>Unknown</h4>A sensor is currently not reporting and its data is
      unknown.
      <h4>Non-Functional</h4>A sensor is currently not functional.
    </div>
  </div>
)
