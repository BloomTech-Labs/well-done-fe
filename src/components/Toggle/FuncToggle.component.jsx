import React, { useState } from 'react'
import Switch from 'react-switch'

import Functioning from '../../icons/PumpFunctioning.svg'


const FuncToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(!checked)
    props.setFuncToggle(!checked)
  }

  return (
    <div>
      <button onClick={handleChange} >
        <img src={Functioning} alt='Functioning pump'/>
      </button>
    
    </div>
  )
}

export default FuncToggle
