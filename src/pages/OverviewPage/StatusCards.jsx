import React from 'react'
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from 'react-icons/fi'
import { Row, Col, Card, Statistic } from 'antd'
import 'antd/dist/antd.css'

function StatusCards({ pumpData, funcPumps, unPumps, nonPumps }) {
  return (
    <div>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        {/* Monitor Reports */}
        <Col span={6} style={{ minWidth: '270px' }}>
          <Card style={{ textAlign: 'center', height: '203px' }}>
            <FiEdit size={'2em'} color={'#082B84'} />
            <h2>Monitor Reports</h2>
            <Statistic title='Total Pumps' value={pumpData.length} />
          </Card>
        </Col>

        {/* Functional */}
        <Col span={6} style={{ minWidth: '270px' }}>
          <Card style={{ textAlign: 'center' }}>
            <FiCheckCircle size={'2em'} color={'#01C800'} />
            <Statistic title='Functioning Pumps' value={funcPumps.length} />
            <Statistic
              title='Percentage ofMonitor Reports'
              value={100 * (funcPumps.length / pumpData.length)}
              precision={2}
              suffix='%'
            />
          </Card>
        </Col>

        {/* Not Functioning */}
        <Col span={6} style={{ minWidth: '270px' }}>
          <Card style={{ textAlign: 'center' }}>
            <FiAlertCircle size={'2em'} color={'#FA0707'} />
            <Statistic title='Not Functioning Pumps' value={nonPumps.length} />
            <Statistic
              title='Percentage ofMonitor Reports'
              value={100 * (nonPumps.length / pumpData.length)}
              precision={2}
              suffix='%'
            />
          </Card>
        </Col>

        {/* Status Unknown */}
        <Col span={6} style={{ minWidth: '270px' }}>
          <Card style={{ textAlign: 'center' }}>
            <FiHelpCircle size={'2em'} color={'#FFAD34'} />
            <Statistic title='Status Uknown' value={unPumps.length} />
            <Statistic
              title='Percentage of Monitor Reports'
              value={100 * (unPumps.length / pumpData.length)}
              precision={2}
              suffix='%'
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default StatusCards
