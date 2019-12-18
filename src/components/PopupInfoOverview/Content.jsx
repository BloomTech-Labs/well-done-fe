import React from 'react'

export default ({ close }) => (
  <div className='modal'>
    <a className='close' onClick={close}>
      &times;
    </a>
    <div className='header'> Legend</div>
    <div className='content'>
      {' '}
      <h4>Monitor Reports</h4>
      All monitors currently reporting data to IOTile and being passed to the
      dashboard database.
      <h4>Functional</h4>A sensor is currently online and providing accurate
      data.
      <h4>Unknown</h4>A sensor is currently not reporting and its data is
      unknown.
      <h4>Non-Functional</h4>A sensor is currently not functional.
      <h4>Grid Information</h4>
      <h5>Grid columns can be filtered, sorted and/or pinned.</h5>
      Numerical "Status" is received from IoTile. (1) is Unknown (2) is
      Functional (Blank) is Non-Functional
    </div>
  </div>
)
