import React, { useEffect, useState } from 'react'
import OrganizationCards from './OrganizatonCards.js'

import { fetchOrgAccounts } from '../../actions/accountAction.js'
import { fetchOrg } from '../../actions/orgAction.js'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

const Organizations = props => {
  const [orgFilter, setOrgFilter] = useState('')

  useEffect(() => {
    props.fetchOrg()
  }, [])

  const handleChange = event => {
    setOrgFilter(event.target.value)
  }

  const filteredOrgs = props.org.filter(
    item => item.org_name.includes(orgFilter) 
  )

  return (
    <div>
      <input
        type='text'
        name='info.name'
        value={filteredOrgs.name}
        onChange={handleChange}
        placeholder='Organization'
      />

      <h1 className='org-header'>Organizations</h1>

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
    org: state.orgReducer.org,
  }
}

export default connect(mapStateToProps, {
  fetchOrg,
})(withRouter(Organizations))
