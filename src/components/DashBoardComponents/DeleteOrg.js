import React from 'react'
const DeleteOrg = props => {
    const deleteHandler = (event, id) => {
        console.log('this is the org props',props)
    event.preventDefault()
    props.deleteOrg(id) //actions
    props.params.api.redrawRows()
  }
  return (
    <span className='btnCon'>
      <button
        style={{ height: 20, lineHeight: 0.5 }}
        onClick={e => deleteHandler(e, props.data.id)}
        className='btn btn-info'
      >
        <i class='icon-trash'></i>
      </button>
    </span>
  )
}
export default DeleteOrg