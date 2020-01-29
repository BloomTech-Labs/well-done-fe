import React, { useEffect, useState } from 'react'
import OrganizationCards from './OrganizatonCards.js'

import { fetchOrgAccounts } from '../../actions/accountAction.js'
import { fetchOrg } from '../../actions/orgAction.js'
import { fetchSensorsByOrgId } from '../../actions/sensorActions'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { AiOutlineSearch } from 'react-icons/ai'

const Organizations = props => {
  const [orgFilter, setOrgFilter] = useState('')
  const [allOrgs, setAllOrgs] = useState()

  useEffect(() => {
    props.fetchOrg()
  }, [])

  useEffect(() => {
      
    if (props.org.org.length > 0) {
        
      props.org.org.forEach(org => {
        console.log(org,"ORG")
      props.fetchOrgAccounts(org.id)
      })
    }
  }, [props.org.isFetching])


  // useEffect(() => {
  //  
  //   props.org.org.forEach(org => {
  //       console.log(org,"ORG")
  //     props.fetchSensorsByOrgId(org.id)
  //     })
  //   
  // }, [])


  

  //   const handleOrgAccounts = props.fetchOrgAccounts().map(item =>
  //     )
  //   )

  const handleChange = event => {
    setOrgFilter(event.target.value)
  }

  const filteredOrgs = props.org.org.filter(item =>
    item.org_name.toLowerCase().includes(orgFilter.toLowerCase())
  )
  const allSensors = props.sensorReducer

  const allAccounts = props.accountReducer.filter(item =>
    item.role ==="org_admin"  )

    
     
      

  return (
    <div>
      <div className='search-div'>
        <h1 className='org-header'>Organizations</h1>
        <input
          className='search-input'
          type='text'
          name='info.name'
          value={filteredOrgs.name}
          onChange={handleChange}
          placeholder='Search Organization'
        />
        <AiOutlineSearch className='orgSearchIcons' />
      </div>

      <section className='org-list'>
        {filteredOrgs.map(item => (
          <OrganizationCards key={item.id} item={item} allAccounts={allAccounts}  />
        ))}
      </section>
      {/* <section className='org-list'>
        {allSensors.map(sensor => (
          <OrganizationCards key={item.id} sensor={item} />
        ))}
      </section> */}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    org: state.orgReducer,
    accountReducer: state.accountReducer.accounts,
    sensorReducer: state.sensorReducer.sensors,
  }
}

export default connect(mapStateToProps, {
  fetchOrg,
  fetchOrgAccounts,
  fetchSensorsByOrgId,
})(withRouter(Organizations))
