import React, { useState } from 'react'
import Switch from 'react-switch'

import Functioning from '../../icons/PumpFunctioning.svg'
import disabled from '../../icons/MapButtonDisabled.svg'
import '../Toggle/FuncToggle.scss'

const FuncToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(!checked)
    props.setFuncToggle(!checked)
  }

  return checked?(
    <div class="tooltip" >
      <button onClick={handleChange}  className="iconBtn">
        <img src={Functioning} alt='Functioning pump' className="iconPump"/>
        <span class="tooltiptext">Functioning</span>
      </button>
    
    </div>
  ):(
    <div class="tooltip" >
    <button onClick={handleChange}  className="iconBtn">
      <img src={disabled} alt='Functioning pump'/>
      <span class="tooltiptext">Functioning</span>
    </button>
  </div>
  )
}

export default FuncToggle
