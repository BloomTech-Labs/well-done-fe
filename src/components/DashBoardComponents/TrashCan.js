import React from 'react'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'
// import { connect } from 'react-redux';
// import {deleteSensor} from '../../actions/sensorActions'

const TrashCan = props => {
  console.log('trashcan', props)

  console.log(props.data.sensor_index)

  const deleteHandler = (event, sensor_index) => {
    event.preventDefault()
    props.deleteSensor(sensor_index)
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

// export default connect(
//   { deleteSensor}
//   )(TrashCan);
