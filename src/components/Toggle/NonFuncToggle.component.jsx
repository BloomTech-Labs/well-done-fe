import React, { useState } from 'react'
import Switch from 'react-switch'

const NonFuncToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(status)
    props.setNonFuncToggle(status)
  }

  return (
    <div>
      <Switch
        className='react-switch'
        checked={checked}
        onChange={handleChange}
        onColor='#FA0707'
      />
    </div>
  )
}

export default NonFuncToggle
