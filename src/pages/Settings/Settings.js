import React from 'react'
import './Settings.scss'
import StaticMenu from '../../components/Menu/StaticMenu'
import Menu from '../../components/Menu/Menu.component'
import EditNameForm from '../../components/SettingsForms/EditNameForm'
import EditPasswordForm from '../../components/SettingsForms/EditPasswordForm'
import EditEmailForm from '../../components/SettingsForms/EditEmailForm'
import { MyForm } from './index'
import { Link } from 'react-router-dom'
const Settings = ({ history }) => {
  return (
    <div
      className='settings'
      style={{
        border: '10px solid green',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <MyForm />
      <Link to={'/pwd'}>change password?</Link>
    </div>
  )
}

export default Settings
