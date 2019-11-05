import React, {useState} from 'react'
import Switch from 'react-switch'

const Toggle = () => {
    const [checked, setChecked] = useState(false)

    const handleChange = status => {
        console.log('here', status)
        setChecked(status)
    }

    return (
        <div>
            <Switch 
                className="react-switch"
                checked={checked}
                onChange={handleChange}
                onColor= "#37C6F3"
                // offColor="#D7D7D7"
            />
        </div>
    )
}

export default Toggle