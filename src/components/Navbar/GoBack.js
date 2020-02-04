import React from 'react'
import { withRouter } from 'react-router'
import back from 'icons/BackArrow.svg'
import '../../pages/MonitorDetails/MonitorDetails.style.scss'

const GoBack = props => {
  return (
    <>
      <div className='backContainer'>
        <button onClick={props.history.goBack} className='backArrow'>
          <img src={back} alt='back arrow'></img>
        </button>
      </div>
    </>
  )
}

export default withRouter(GoBack)
