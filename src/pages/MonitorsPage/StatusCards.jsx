import React from 'react'
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from 'react-icons/fi'
import { Row, Col, Card, Statistic } from 'antd'
import 'antd/dist/antd.css'
import './MonitorsPage.scss'


function StatusCards({ pumpData, funcPumps, unPumps, nonPumps }) {
  return (
    <div className='statusContainer'>

        <div className="monitorCard">
          <div className="innerMonitorCard">
              <h2>Monitors</h2>
              <p>{pumpData.length}</p>
            </div>
        </div>

        <div className="functioningCard">
            
            <p>{Number.parseFloat((100 * (funcPumps.length / pumpData.length))).toFixed(2)}%</p>
            <p>Functional</p>
            <h4>{funcPumps.length} out of {pumpData.length}</h4>
        </div>

        <div className="nonfunctioningCard">
            
            <p>{Number.parseFloat((100 * (nonPumps.length / pumpData.length))).toFixed(2)}%</p>
            <p>Non Functional</p>
            <h4>{nonPumps.length} out of {pumpData.length}</h4>
        </div>

        <div className="noDataCard">
            
            <p>{Number.parseFloat((100 * (unPumps.length / pumpData.length))).toFixed(2)}%</p>
            <p>No Data</p>
            <h4>{unPumps.length} out of {pumpData.length}</h4>
        </div>
        
        {/* <div className='monitorCard'>
          <Card style={{ textAlign: 'center'}}>
            <div className='innerCard'>
            <FiEdit size={'2em'} color={'#082B84'} />
            <h2>Monitor Reports</h2>
            <Statistic title='Total Pumps' value={pumpData.length} />
            </div>
          </Card>
        </div> */}


        {/* Functional */}
        {/* <Col span={6} style={{ minWidth: '270px' }}> */}
          {/* <Card style={{ textAlign: 'center' }}>
            <FiCheckCircle size={'2em'} color={'#01C800'} />
            <Statistic title='Functioning Pumps' value={funcPumps.length} />
            <Statistic
              title='Percentage ofMonitor Reports'
              value={100 * (funcPumps.length / pumpData.length)}
              precision={2}
              suffix='%'
            />
          </Card> */}
        {/* </Col> */}

        {/* Not Functioning */}
        {/* <Col span={6} style={{ minWidth: '270px' }}> */}
          {/* <Card style={{ textAlign: 'center' }}>
            <FiAlertCircle size={'2em'} color={'#FA0707'} />
            <Statistic title='Not Functioning Pumps' value={nonPumps.length} />
            <Statistic
              title='Percentage ofMonitor Reports'
              value={100 * (nonPumps.length / pumpData.length)}
              precision={2}
              suffix='%'
            />
          </Card> */}
        {/* </Col> */}

        {/* Status Unknown */}
        {/* <Col span={6} style={{ minWidth: '270px' }}> */}
          {/* <Card style={{ textAlign: 'center' }}>
            <FiHelpCircle size={'2em'} color={'#FFAD34'} />
            <Statistic title='Status Uknown' value={unPumps.length} />
            <Statistic
              title='Percentage of Monitor Reports'
              value={100 * (unPumps.length / pumpData.length)}
              precision={2}
              suffix='%'
            />
          </Card> */}
        {/* </Col> */}
      {/* </Row> */}
    </div>
  )
}

export default StatusCards
