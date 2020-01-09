import React from 'react'

const TrashCan = props => {
  console.log('trash props',props)
  const deleteHandler = (event, sensor_index) => {
    event.preventDefault()
    props.deleteSensor(sensor_index)
    props.params.api.redrawRows()
  }

  return (
    <span className='btnCon'>
      <button
        style={{ height: 20, lineHeight: 0.5 }}
        onClick={e => deleteHandler(e, props.data.sensor_index)}
        className='btn btn-info'
      >
        <i class='icon-trash'></i>
      </button>
    </span>
  )
}

export default TrashCan
