import React, {useState} from 'react'
import Switch from 'react-switch'

const UnknownToggle = props => {
    // console.log('props in UnknownToggle', props)
    const [checked, setChecked] = useState(true)

    const handleChange = status => {
        console.log('here in UnknownToggle', status)
        setChecked(status)
        // alert('dangerous')
        props.setUnknownToggle(status)
    }


    return (
        <div>
            <Switch 
                className="react-switch"
                checked={checked}
                onChange={handleChange}
                onColor= "#FFAD34"
                // offColor="#D7D7D7"
            />
        </div>
    )
}

export default UnknownToggle