import React, {useEffect,useState} from 'react'
import AxiosWithAuth from '../AxiosWithAuth/axiosWithAuth'
import FuncToggle from '../Toggle/FuncToggle.component'
import UnknownToggle from '../Toggle/UnknownToggle.component'
import NonFuncToggle from '../Toggle/NonFuncToggle.component'




const IconFilters = props => {
    const [pumps, setPumps] = useState([])
    useEffect(() => {
        AxiosWithAuth()
          .get(`${process.env.REACT_APP_HEROKU_API}/api/pumps`)
          .then(res => {
            setPumps(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }, [])
    return (
        <div>
              <FuncToggle
              sensors={props.sensors}
              setFuncToggle={props.setFuncToggle}
            />
             <UnknownToggle
              sensors={props.sensors}
              setUnknownToggle={props.setUnknownToggle}
            />
              <NonFuncToggle
              sensors={props.sensors}
              setNonFuncToggle={props.setNonFuncToggle}
            />
            
        </div>
    )
}

export default IconFilters