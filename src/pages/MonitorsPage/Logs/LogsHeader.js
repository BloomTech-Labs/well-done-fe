import React, { useState } from 'react'
import './Logs.styles.scss'
import LogsFilters from './LogFilters'
import gridOptionss from '../../../components/Grid/Pagination'

function LogsHeader() {
  const onQuickFilterChanged = () => {
    gridOptionss.api.setQuickFilter(document.getElementById('searchLogs').value)
  }

  return (
    <>
      <div className='logsWrapper'>
        <div className='logsHeaderContainer'>
          <h1>Logs</h1>
        </div>
        <div className='searchInput'>
          <input
            className='searchInsensors'
            type='text'
            onChange={onQuickFilterChanged}
            id='searchLogs'
            placeholder=' search...'
          />
          <div className='dropDwnContainer'></div>
          <LogsFilters />
        </div>
      </div>
    </>
  )
}

export default LogsHeader
