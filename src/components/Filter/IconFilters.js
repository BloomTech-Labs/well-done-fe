import React from 'react'
import FuncToggle from '../Toggle/FuncToggle.component'
import UnknownToggle from '../Toggle/UnknownToggle.component'
import NonFuncToggle from '../Toggle/NonFuncToggle.component'

const IconFilters = props => {
  return (
    <div>
      <FuncToggle sensors={props.sensors} setFuncToggle={props.setFuncToggle} />
      <UnknownToggle
        sensors={props.sensors}
        setUnknownToggle={props.setUnknownToggle}
      />
      <NonFuncToggle
        sensors={props.sensors}
        setNonFuncToggle={props.setNonFuncToggle}
      />
    </div>
  )
}

export default IconFilters
