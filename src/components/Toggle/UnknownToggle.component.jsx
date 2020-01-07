import React, { useState } from 'react'
import Switch from 'react-switch'
import Unknown from '../../icons/PumpNoData.svg'
import disabled from '../../icons/MapButtonDisabled.svg'
import '../Toggle/Unknown.scss'

const UnknownToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(!checked)
    props.setUnknownToggle(!checked)
  }

  return checked? (
    <div class="tooltip" >
       <button onClick={handleChange} className="iconBtn" >
        <img src={Unknown} alt='Unknown pump status'/>
        <span class="tooltiptext">Unknown</span>
      </button>

    </div>
  ):(
    <div class="tooltip" >
    <button onClick={handleChange} className="iconBtn" >
      <img src={disabled} alt='Functioning pump'/>
      <span class="tooltiptext">Unknown</span>
    </button>
  </div>
  )
}

export default UnknownToggle
