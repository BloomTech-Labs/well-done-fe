import React, { useEffect } from 'react'
import OrganizationCards from './OrganizatonCards.js'
import OrganizationsSearch from './OrganizationsSearch.js'

import { fetchOrgAccounts } from '../../actions/accountAction.js'
import { fetchOrg } from '../../actions/orgAction.js'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

const Organizations = props => {
    
  useEffect(() => {
    props.fetchOrg()
  }, [])

  return (
    <div>
      <h1 className= 'org-header' >Organizations</h1>

    <section className="org-list">
      {props.org.map(org => (
        <OrganizationCards key={org.id} org={org} />
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
