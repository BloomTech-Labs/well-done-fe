import {
    FiEdit,
    FiHelpCircle,
    FiAlertCircle,
    FiCheckCircle,
  } from "react-icons/fi";
  
  import React, { useState, useEffect } from "react";
  import { Button, Card, Image } from 'semantic-ui-react'
  import AxiosWithAuth from '../components/AxiosWithAuth/axiosWithAuth'
  var moment = require('moment')
  
  
  const processData = (data )=> {
    console.log("In my data fixing function")
    // Remove null dates
    const clean_data = data.filter(datum => datum.date != null)
    // Get list of dates
    const all_dates = []
    clean_data.forEach(date => all_dates.push(moment(date.date, 'ddd MMM DD YYYY')))
  
    // Get max date
    const max_date = all_dates.reduce(function (a, b) { return a > b ? a : b; });
  
    // Get Data only for max date
    const useable_data = clean_data.filter(datum => max_date.isSame(moment(datum.date, 'ddd MMM DD YYYY')))
  
    const sensors = new Set([])
    const sensors_3 = useable_data.filter(datum => datum.status == 3)
    const sensors_2 = useable_data.filter(datum => datum.status == 2)
    const sensors_1 = useable_data.filter(datum => datum.status == 1)
  
    useable_data.forEach(datum => sensors.add(datum.sensor_id))
  
    const summary_data = {}
    summary_data.num_sensors = sensors.size
    summary_data.sensors_3 = sensors_3.length
    summary_data.sensors_2 = sensors_2.length
    summary_data.sensors_1 = sensors_1.length
  
    // console.log(data)
    // console.log(clean_data)
    // console.log(all_dates)
    // console.log(max_date)
    console.log(useable_data)
    console.log(summary_data)
  
    return summary_data
  
  
  }
  
  
  function Monitors(props) {
  
    const [sensorStatus, setSensorStatus] = useState({num_sensors:0});
  
    useEffect(() => {
      AxiosWithAuth()
          .get("https://welldone-db.herokuapp.com/api/history")
          .then(res => {
              // console.log(res.data)
              processData(res.data)
              // setSensorStatus(res.data)
              let data = processData(res.data)
              setSensorStatus(data)
          })
  }, [ ])
  
  
    return <div className="monitorspage">
        <Card.Group centered>
        
    <Card color='blue'>
      <Card.Content>
  
        <FiEdit/>
   
        <Card.Header>{sensorStatus.num_sensors}</Card.Header>
        <Card.Meta >Monitor Reports</Card.Meta>
      </Card.Content>
    </Card>
    
    <Card color='green'>
      <Card.Content>
   <FiCheckCircle/>
        <Card.Header>{sensorStatus.sensors_3}</Card.Header>
        <Card.Meta>Working</Card.Meta>
        <Card.Description>
          {sensorStatus.sensors_3/sensorStatus.num_sensors}%
        </Card.Description>
      </Card.Content>
    </Card>
    
    <Card color='red'>
      <Card.Content>
      <FiHelpCircle/>
    
        <Card.Header>{sensorStatus.sensors_2}</Card.Header>
        <Card.Meta>Broken</Card.Meta>
        <Card.Description>
        {Math.floor((sensorStatus.sensors_2/sensorStatus.num_sensors)*100)}%
        </Card.Description>
      </Card.Content>
    </Card>
    <Card color='yellow'>
      <Card.Content>
      <FiAlertCircle/>
        <Card.Header>{sensorStatus.sensors_1}</Card.Header>
        <Card.Meta>Unknown</Card.Meta>
        <Card.Description>
          {Math.floor((sensorStatus.sensors_1/sensorStatus.num_sensors)*100)}%
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
  </div>
  }
  
  export default Monitors