import React, { useState, useEffect } from 'react'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchOrg } from '../../actions/orgAction.js'

const OrganizationSearch = props => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    props.fetchOrg()
  }, [])

  const handleChange = event => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    })
  }

 

  return (
    <div>
  
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
})(withRouter(OrganizationSearch))
