import React from 'react'
import './Settings.scss'
import { MyForm } from './index'

const Settings = ({ history }) => {
  return (
    <div
      className='settings'
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ marginLeft: '0.5em' }}>SETTINGS{'🔧'}</h1>
      <MyForm />
    </div>
  )
}

export default Settings
