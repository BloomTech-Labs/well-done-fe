import React from 'react'
import { useSelector } from 'react-redux'
import 'antd/dist/antd.css'
import '../MonitorsPage/Monitors/MonitorsPage.scss'

function StatusCards({ pumpData, nonPumps /*, funcPumps, unPumps*/ }) {
  const recentHistory = useSelector(state => state.historyReducer.recentHistory)

  let funcPumps = 0
  let unPumps = 0

  for (const pump of Object.keys(recentHistory)) {
    if (recentHistory[pump] === 'yes') {
      funcPumps++
    } else {
      unPumps++
    }
  }

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
          {Math.round(100 * (funcPumps / pumpData.length))}%
        </p>
        <p className='outOf'>
          {funcPumps} out of {pumpData.length}
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
          {Math.round(100 * (unPumps / pumpData.length))}%
        </p>
        <p className='outOf'>
          {unPumps} out of {pumpData.length}
        </p>
      </div>
    </div>
  )
}

export default StatusCards
