import React, { useState } from 'react'
import Switch from 'react-switch'

const FuncToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(status)
    props.setFuncToggle(status)
  }

  return (
    <div>
      <Switch
        className='react-switch'
        checked={checked}
        onChange={handleChange}
        onColor='#01C800'
      />
    </div>
  )
}

export default FuncToggle
