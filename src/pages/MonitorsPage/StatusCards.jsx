import React from 'react'
import 'antd/dist/antd.css'
import './MonitorsPage.scss'

function StatusCards({ pumpData, funcPumps, unPumps, nonPumps }) {
  return (
    <div className='statusContainer'>
      <div className='monitorCard'>
        <div className='monitorHeader'>
          <h2>Monitors</h2>
        </div>
        <p>{pumpData.length}</p>
      </div>

      <div className='functioningCard'>
        <div className='functionalHeader'>
          <h2>Functional</h2>
        </div>
        <p className='percent'>
          {Math.round(100 * (funcPumps.length / pumpData.length))}%
        </p>
        <p className='outOf'>
          {funcPumps.length} out of {pumpData.length}
        </p>
      </div>

      <div className='nonfunctioningCard'>
        <div className='nonFuncHeader'>
          <h2>Non Functional</h2>
        </div>
        <p className='percent'>
          {Math.round(100 * (nonPumps.length / pumpData.length))}%
        </p>
        <p className='outOf'>
          {nonPumps.length} out of {pumpData.length}
        </p>
      </div>

      <div className='noDataCard'>
        <div className='noDataHeader'>
          <h2>No Data</h2>
        </div>
        <p className='percent'>
          {Math.round(100 * (unPumps.length / pumpData.length))}%
        </p>
        <p className='outOf'>
          {unPumps.length} out of {pumpData.length}
        </p>
      </div>
    </div>
  )
}

export default StatusCards
