import React, { useEffect, useState } from 'react'
import OrganizationCards from './OrganizatonCards.js'

import { fetchOrgAccounts } from '../../actions/orgAction'
import { fetchOrg } from '../../actions/orgAction.js'
import { fetchSensorsByOrgId } from '../../actions/orgAction'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { AiOutlineSearch } from 'react-icons/ai'

const Organizations = props => {
  const [orgFilter, setOrgFilter] = useState('')

  useEffect(() => {
    props.fetchOrg()
  }, [])

  useEffect(() => {

    if (props.org.org.length > 0) {
      props.org.org.forEach(org => {
        props.fetchOrgAccounts(org.id)
      })
    }
  }, [props.org.isFetching])
  console.log(props.org,"props.org")

  useEffect(() => {
    if (props.org.org.length > 0) {
      props.org.org.forEach(org => {
        props.fetchSensorsByOrgId(org.id)
      })
    }
  }, [props.org.isFetching])

  const handleChange = event => {
    setOrgFilter(event.target.value)
  }
  //search
  const filteredOrgs = props.org.org.filter(item =>
    item.org_name.toLowerCase().includes(orgFilter.toLowerCase())
  )

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
          <OrganizationCards key={item.id} item={item} />
        ))}
      </section>
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
