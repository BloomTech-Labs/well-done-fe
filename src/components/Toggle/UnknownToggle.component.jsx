import React, { useState } from 'react'
import Switch from 'react-switch'
import Unknown from '../../icons/PumpNoData.svg'

const UnknownToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(!checked)
    props.setUnknownToggle(!checked)
  }

  return (
    <div>
       <button onClick={handleChange} >
        <img src={Unknown} alt='Unknown pump status'/>
      </button>
      {/* <Switch
        className='react-switch'
        checked={checked}
        onChange={handleChange}
        onColor='#FFAD34'
      /> */}
    </div>
  )
}

export default UnknownToggle
