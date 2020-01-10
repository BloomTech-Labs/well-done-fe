import React from 'react'

const DeleteAccount = props => {
  const deleteHandler = (event, id) => {
    event.preventDefault()
    props.deleteAccount(id)
    props.params.api.redrawRows()
  }

  return (
    <span className='btnCon'>
      <button
        style={{ height: 20, lineHeight: 0.5 }}
        onClick={e => deleteHandler(e, props.data.id)}
        className='btn btn-info'
      >
        <i className='icon-trash'></i>
      </button>
    </span>
  )
}

export default DeleteAccount
