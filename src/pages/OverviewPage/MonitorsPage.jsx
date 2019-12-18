import React, { useState, useEffect } from 'react'
import AxiosWithAuth from '../../components/AxiosWithAuth/axiosWithAuth'

import StaticMenu from '../../components/Menu/StaticMenu'
import Legend from './Legend'
import StatusCards from './StatusCards'
import Grid from '../../components/Grid/Aggrid'
import PercentageChart from './PercentageChart'

// ant design style
import { Row, Col, Layout } from 'antd'
import 'antd/dist/antd.css'
const { Sider, Content } = Layout

const MonitorsPage = ({ history }) => {
  const [pumpData, setPumpData] = useState([])
  const [funcPumps, setFuncPumps] = useState([])
  const [unPumps, setUnPumps] = useState([])
  const [nonPumps, setNonPumps] = useState([])

  useEffect(() => {
    AxiosWithAuth()
      .get(`${process.env.REACT_APP_HEROKU_API}/api/sensors/recent`)
      .then(res => {
        setPumpData(res.data)
        setFuncPumps(res.data.filter(pump => pump.status === 2))
        setUnPumps(res.data.filter(pump => pump.status === 1))
        setNonPumps(
          res.data.filter(pump => pump.status === 0 || pump.status === null)
        )
      })
  }, [])

  return (
    <div>
      <Layout style={{ backgroundColor: '#E5E5E5' }}>
        <Sider>
          {/* Side Nav */}
          <StaticMenu history={history} />
        </Sider>
        <Content>
          {/* legend */}
          <Row type='flex' justify='start'>
            <Col span={23} offset={1}>
              <Legend />
            </Col>
          </Row>

          {/* Cards */}
          <Row type='flex' justify='space-around'>
            <Col span={20}>
              <StatusCards
                pumpData={pumpData}
                funcPumps={funcPumps}
                unPumps={unPumps}
                nonPumps={nonPumps}
              />
            </Col>
          </Row>

          {/* Grid */}
          <Row type='flex' justify='space-between'>
            <Col
              span={10}
              offset={1}
              style={{ maxWidth: '600px', minWidth: '270px' }}
            >
              <Grid />
            </Col>

            {/* Percentage Chart */}
            <Col span={13} style={{ minWidth: '270px' }}>
              <PercentageChart
                funcPumps={funcPumps}
                unPumps={unPumps}
                nonPumps={nonPumps}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default MonitorsPage
