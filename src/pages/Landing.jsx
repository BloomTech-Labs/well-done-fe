import React from 'react'
import SignIn from '../components/SignIn/SignIn.component'

import { Row, Col } from 'antd'
import 'antd/dist/antd.css'

const image =
  'https://res.cloudinary.com/dfulxq7so/image/upload/v1572452572/malawi20100165_cesh8j.jpg'

const Landing = props => {
  return (
    <Row
      type='flex'
      justify='space-around'
      align='middle'
      style={{ backgroundColor: '#E5E5E5' }}
    >
      <Col span={18}>
        <img
          src={image}
          alt='main image'
          style={{ width: '100%', height: 'auto' }}
        />
      </Col>
      <Col span={6} style={{ minWidth: '380px' }}>
        <SignIn history={props.history} />
      </Col>
    </Row>
  )
}

export default Landing
