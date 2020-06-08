import React, { useState } from 'react'
import NonFunctioning from '../../icons/PumpNon-Functioning.svg'
import '../Toggle/NonFunctioning.scss'
import NonFunctionDisabled from '../../icons/Non-FunctioningDisabled.svg'

const NonFuncToggle = props => {
  const [checked, setChecked] = useState(true)

  const handleChange = status => {
    setChecked(!checked)
    props.setNonFuncToggle(!checked)
  }

  return checked ? (
    <div className='tooltip'>
      <button onClick={handleChange} className='iconBtn'>
        <img
          src={NonFunctioning}
          alt='Non-functioning pump'
          className='iconPump'
        />
        <span className='tooltiptext'>Non-Functioning</span>
      </button>
    </div>
  ) : (
    <div className='tooltip'>
      <button onClick={handleChange} className='iconBtn'>
        <img src={NonFunctionDisabled} alt='Functioning pump' />
        <span className='tooltiptext'>Non-Functioning</span>
      </button>
    </div>
  )
}

export default NonFuncToggle
