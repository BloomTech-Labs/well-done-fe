import React from 'react'

import AccountGrid from '../../components/Grid/accountGrid/AccountGrid'
import OrgGrid from '../../components/DashBoardComponents/orgGrid/orgGrid'

const Admin = () => {
  const userRole = localStorage.getItem('role')
  const orgId = localStorage.getItem('org_id')
  return (
    <div>
      {userRole === 'super_user' ? <OrgGrid /> : null}
      <AccountGrid orgId={orgId} userRole={userRole} />
    </div>
  )
}

export default Admin
