import React, { useState } from 'react'
import Switch from 'react-switch'

const UnknownToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(status)
    props.setUnknownToggle(status)
  }

  return (
    <div>
      <Switch
        className='react-switch'
        checked={checked}
        onChange={handleChange}
        onColor='#FFAD34'
      />
    </div>
  )
}

export default UnknownToggle
