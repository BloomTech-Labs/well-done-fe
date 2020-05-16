import React from 'react'
import { handleSelected } from 'actions/selectedSensorsActions'
const ViewButton = props => {
  const routeHandler = (e, selPump) => {
    e.preventDefault()
    localStorage.setItem('sensor', props.data.physical_id)
    props.dispatch(handleSelected(selPump))
    props.history.push(`/monitordetails/${props.data.sensor_pid}`)
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
