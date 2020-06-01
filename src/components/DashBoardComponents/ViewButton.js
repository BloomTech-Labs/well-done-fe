import React from 'react'
import { handleSelected } from 'actions/selectedSensorsActions'
const ViewButton = props => {
  const routeHandler = (e, selPump) => {
    e.preventDefault()
    
    props.dispatch(handleSelected(selPump))
    props.history.push(`/monitor/${props.data.sensor_pid}`)
  };
  return (
    <span className='btnCon'>
      <button
        style={{ height: 20, lineHeight: 0.5 }}
        onClick={e => routeHandler(e, props.data)}
        className='btn btn-info'
      >
        View
      </button>
    </span>
  )
}

export default ViewButton
