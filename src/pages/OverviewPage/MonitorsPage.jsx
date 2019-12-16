import React, { useState, useEffect } from 'react'
import AxiosWithAuth from '../../components/AxiosWithAuth/axiosWithAuth'

import StaticMenu from '../../components/Menu/StaticMenu'
import Legend from './Legend'
import StatusCards from './StatusCards'
import Grid from '../../components/Grid/Aggrid'
import PercentageChart from './PercentageChart'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchSensors } from '../../actions/sensorActions'

// ant design style
import { Row, Col, Layout } from 'antd'
import 'antd/dist/antd.css'
const { Sider, Content } = Layout

const MonitorsPage = ({ history }) => {
  const [pumpData, setPumpData] = useState([])
  const [funcPumps, setFuncPumps] = useState([])
  const [unPumps, setUnPumps] = useState([])
  const [nonPumps, setNonPumps] = useState([])

  const sensorSelector = useSelector(state => state.sensorReducer)
  const dispatch = useDispatch()
  console.log(sensorSelector)

  useEffect(() => {
    dispatch(fetchSensors())
  }, [])

  useEffect(() => {
    setPumpData(sensorSelector.sensors)
    setFuncPumps(sensorSelector.sensors.filter(pump => pump.status === 2))
    setUnPumps(sensorSelector.sensors.filter(pump => pump.status === 1))
    setNonPumps(
      sensorSelector.sensors.filter(
        pump => pump.status === 0 || pump.status === null
      )
    )
  }, [sensorSelector.isFetching])

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
              <Grid sensors={sensorSelector.sensors} />
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
