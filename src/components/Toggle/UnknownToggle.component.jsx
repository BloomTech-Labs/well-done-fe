import React, { useState } from 'react'
import Switch from 'react-switch'
import Unknown from '../../icons/PumpNoData.svg'
import '../Toggle/Unknown.scss'
import NoDataDisabled from '../../icons/NoDataDisabled.svg'

const UnknownToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(!checked) 
    props.setUnknownToggle(!checked)
  }

  return checked? (
    <div class="tooltip" >
       <button onClick={handleChange} className="iconBtn" >
        <img src={Unknown} alt='Unknown pump status' className="iconPump"/>
        <span class="tooltiptext">Unknown</span>
      </button>

    </div>
  ):(
    <div class="tooltip" >
    <button onClick={handleChange} className="iconBtn" >
      <img src={NoDataDisabled} alt='Functioning pump' />
      <span class="tooltiptext">Unknown</span>
    </button>
  </div>
  )
}

export default UnknownToggle
