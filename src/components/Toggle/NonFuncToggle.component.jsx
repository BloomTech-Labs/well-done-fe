import React, { useState } from 'react'
import Switch from 'react-switch'
import NonFunctioning from '../../icons/PumpNon-Functioning.svg'

const NonFuncToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(!checked)
    props.setNonFuncToggle(!checked)
  }

  return (
    <div>
      <button onClick={handleChange} >
        <img src={NonFunctioning} alt='Non-functioning pump'/>
      </button>
      {/* <Switch
        className='react-switch'
        checked={checked}
        onChange={handleChange}
        onColor='#FA0707'
      /> */}
    </div>
  )
}

export default NonFuncToggle
