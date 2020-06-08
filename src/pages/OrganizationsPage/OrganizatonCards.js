import React from 'react'

import './Organization.styles.scss'

import ngo from '../../Images/ngo.png'

const OrganizationCards = props => {
  console.log(props, 'props in org')

  if (!props.item.orgAccounts) {
    return <span>Loading...</span>
  }

  const orgAdmin = props.item.orgAccounts.filter(
    item => item.role !== 'super_user' || item.role !== 'operator'
  )
  const orgStaff = props.item.orgAccounts.filter(
    item => item.role === 'org_admin' || item.role === 'operator'
  )
  if (!props.item.orgSensors) {
    return <span>Loading...</span>
  }
  const sensorTotal = props.item.orgSensors

  return (
    <div className='outer-card'>
      <div img-cont>
        <img className='img-card' src={ngo} alt='Organization logo' />
      </div>

      <div className='card-container'>
        <h1 className='org-title'> {props.item.org_name}</h1>
        <div className='card-content'>
          <h3>Staff: {orgStaff.length}</h3>
          <h3>Admin: {orgAdmin.length}</h3>
          <h3>Sensors: {sensorTotal.length}</h3>
        </div>
      </div>
    </div>
  )
}

export default OrganizationCards
