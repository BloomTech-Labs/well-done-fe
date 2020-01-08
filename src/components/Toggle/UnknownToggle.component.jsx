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
    <div className="tooltip" >
       <button onClick={handleChange} className="iconBtn" >
        <img src={Unknown} alt='Unknown pump status' className="iconPump"/>
        <span className="tooltiptext">Unknown</span>
      </button>

    </div>
  ):(
    <div className="tooltip" >
    <button onClick={handleChange} className="iconBtn" >
      <img src={disabled} alt='Functioning pump' />
      <span className="tooltiptext">Unknown</span>
    </button>
  </div>
  )
}

export default UnknownToggle
