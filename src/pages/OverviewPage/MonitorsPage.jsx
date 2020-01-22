import React, { useState, useEffect } from 'react'
import AxiosWithAuth from '../../components/AxiosWithAuth/axiosWithAuth'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSensors} from '../../actions/sensorActions'


import Legend from "./Legend"
import StatusCards from "./StatusCards"
import Grid from "../../components/Grid/Aggrid"
import PercentageChart from "./PercentageChart"
import Menu from '../../components/Menu/Menu.component'
import Sensors from '../../components/DashBoardComponents/Sensors'
import './MonitorsPage.scss'
import 'antd/dist/antd.css'


const MonitorsPage = (props) => {
  console.log('what are my props ', props)

  const sensorReducer = useSelector(state => state.sensorReducer)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSensors())
  }, [])


  // const historyDate = useSelector(state => state.historyReducer)

  

  let pumpData = sensorReducer.sensors
  let funcPumps = sensorReducer.sensors.filter(pump => pump.status === 2)
  let unPumps = sensorReducer.sensors.filter(pump => pump.status === 1)
  let nonPumps = sensorReducer.sensors.filter(pump => pump.status === 0 || pump.status === null)
  

  return ( 
    <>
    <div className='monitorContainer'>
         <div className='percentContainer'>
              <PercentageChart
                funcPumps={funcPumps}
                unPumps={unPumps}
                nonPumps={nonPumps}
              />
              </div>
      
          {/* legend */}
          {/* <div className='dash-mob'> 
        <Menu  history={props.history} /></div> */}
          <div className='cardsContainer'>
              <StatusCards
                pumpData={pumpData}
                funcPumps={funcPumps}
                unPumps={unPumps}
                nonPumps={nonPumps}
                />
        
      </div>
      </div>
      <div className='sensorTable'>
      <Sensors
            gridInfo={sensorReducer.gridInfo}
            sensors={sensorReducer.sensors}
            selectedPump={props.selectedPump}
            setSelectedPump={props.setSelectedPump}
          />
   </div>
    </>
  )
}


export default MonitorsPage
