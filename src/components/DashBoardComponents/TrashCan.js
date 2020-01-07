import React from 'react'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'


const TrashCan = props => {
  console.log('trashcan',props)

  console.log(props.data.physical_id)

  const deleteHandler = (event, physical_id) => {
    event.preventDefault()
    AxiosWithAuth()
    .delete(`localhost:4000/api/sensors/${physical_id}`)
    .then(res => console.log(res.data))
  }

  return(
    <span className='btnCon'>
      <button
        style={{ height: 20, lineHeight: 0.5 }}
        onClick={e => deleteHandler(e, props.data.physical_id)}
        className='btn btn-info'
      >
        <i class="icon-trash"></i>
      </button>
    </span>
   
  )
}

export default TrashCan
