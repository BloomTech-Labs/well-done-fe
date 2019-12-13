import React, {useState} from 'react'
import Switch from 'react-switch'

const NonFuncToggle = props => {
    // console.log('props in NonFuncToggle', props)
    const [checked, setChecked] = useState(true)

    const handleChange = status => {
        console.log('here in NonFuncToggle', status)
        setChecked(status)
        // alert('dangerous')
        props.setNonFuncToggle(status)
    }


    return (
        <div>
            <Switch 
                className="react-switch"
                checked={checked}
                onChange={handleChange}
                onColor= "#FA0707"
                // offColor="#D7D7D7"
            />
        </div>
    )
}

export default NonFuncToggle