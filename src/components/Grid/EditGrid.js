import React from 'react'

const EditGrid = props => {
    console.log(props)

    const editHandler = (e, selItem)=> {
        e.preventDefault()
        
    }

    return (
    <span className='btnCon'>
      <button
        style={{ height: 20, lineHeight: 0.5 }}
        onClick={e => editHandler(e, props.data)}
        className='btn btn-info'
      >
      Edit
      </button>
    </span>
    )
}
export default EditGrid