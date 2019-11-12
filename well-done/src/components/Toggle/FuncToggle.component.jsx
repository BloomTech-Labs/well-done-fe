import React, {useState} from 'react'
import Switch from 'react-switch'

const FuncToggle = props => {
    // console.log('props in FuncToggle', props)
    const [checked, setChecked] = useState(true)

    const handleChange = status => {
        console.log('here in FuncToggle', status)
        setChecked(status)
        // alert('dangerous')
        props.setFuncToggle(status)
    }


    return (
        <div>
            <Switch 
                className="react-switch"
                checked={checked}
                onChange={handleChange}
                onColor= "#01C800"
                // offColor="#D7D7D7"
            />
        </div>
    )
}

export default FuncToggle