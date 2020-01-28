import React from 'react'
import { Card, Image, Modal, Button } from 'semantic-ui-react'

import './Organization.styles.scss'

import ngo from '../../Images/ngo.png'

const OrganizationCards = props => {
    console.log(props,"props in org")
  return (
    <div className='outer-card'>
      <div img-cont>
        <img className='img-card' src={ngo} alt='Organization logo' />
      </div>

      <div className='card-container'>
        <h1 className ="org-title"> {props.sensor.org_id}</h1>
          <div className='card-content'>
            <h3>Staff: 5</h3>
            <h3>Admin: 2</h3>
            <h3>Sensors: 15</h3>
            <h3>Countries: 3</h3>
          </div>
      </div>
      {/* 
            <Card >
      <Image src={DropletDroplet} />
      <Card.Content>
      <h3>{props.org.org_name}</h3>
        <Card.Header> <h3>Staff</h3></Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description> <h3>Admins</h3> <h3>Sensors</h3> <h3>Countries</h3></Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Button Organization />

      </Card.Content>
    </Card> */}
    </div>
  )
}

export default OrganizationCards
