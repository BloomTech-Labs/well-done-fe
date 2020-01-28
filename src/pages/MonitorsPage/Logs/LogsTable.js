import React from 'react'
import LogsHeader from './LogsHeader'

// redux
import { withRouter } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

function LogsTable() {
  return (
    <div>
      <LogsHeader />
    </div>
  )
}

export default LogsTable
