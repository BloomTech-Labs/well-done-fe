import React from 'react'

const ViewButton = props => {
  const routeHandler = (e, selPump) => {
    e.preventDefault()
    props.agGridReact.props.setSelectedPump(selPump)
    props.agGridReact.props.history.push('/monitordetails')
  }

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
