import React, { useState } from 'react'
import Switch from 'react-switch'
import NonFunctioning from '../../icons/PumpNon-Functioning.svg'
import disabled from '../../icons/MapButtonDisabled.svg'
import '../Toggle/NonFunctioning.scss'

const NonFuncToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(!checked)
    props.setNonFuncToggle(!checked)
  }

  return checked?(
    <div class="tooltip" >
      <button onClick={handleChange} className="iconBtn" >
        <img src={NonFunctioning} alt='Non-functioning pump'/>
        <span class="tooltiptext">Non-Functioning</span>
      </button>
    </div>
  ):(
    <div class="tooltip" >
    <button onClick={handleChange}  className="iconBtn">
      <img src={disabled} alt='Functioning pump'/>
      <span class="tooltiptext">Non-Functioning</span>
    </button>
  </div>
  )
}

export default NonFuncToggle
