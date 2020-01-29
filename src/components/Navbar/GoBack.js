import React from 'react'
import { withRouter } from 'react-router'
import { Button, Icon } from 'antd'
import back from '../../icons/BackArrow.svg'
import '../../pages/MonitorsLineChart.styles.scss'

const GoBack = props => {
  return (
    <>
      <button onClick={props.history.goBack} className='backArrow'>
        <img src={back} alt='back arrow'></img>
      </button>
    </>
  )
}

export default withRouter(GoBack)