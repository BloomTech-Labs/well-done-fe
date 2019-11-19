// import React, {useState} from 'react';
// import Map from '../components/Map/Map.component'
// import PumpInDetails from '../components/PumpInDetails/PumpInDetails.component';
// import Menu from '../components/Menu/Menu.component'
// import './MonitorDetails.style.scss'

// const MonitorDetails = props => {
//     console.log('props in MonitorDetails', props)

//     const [viewport, setViewport] = useState({
//         latitude: 13.5651,
//         longitude: 104.7538,
//         width: "50vw",
//         height: "50vh",
//         zoom: 8
//     })

//     return (
//         <div className="monitor-page">
//             <div className="menu">
//                 <Menu></Menu>
//             </div>
//             <PumpInDetails selectedPump={props.selectedPump}/>
//             <Map
//                 sensors={props.sensors}
//                 viewport = {viewport}
//                 setViewport = {setViewport}
//             />
            
//         </div>
//     )
// }
import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { Tabs, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./MonitorDetail.css";
const { TabPane } = Tabs;

const MonitorDetails = props => {
  console.log("MonitorDetails Props", props);
  console.log("MonitorDetails Props Sensors 0", props.sensors[0]);

  const [viewport, setViewport] = useState({
    latitude: 13.5651,
    longitude: 104.7538,
    width: "100%",
    height: "30vh",
    zoom: 7
  });

  return (
    <div>
      <Tabs>
        {props.sensors.map(data => (
          <TabPane
            value={data.physical_id}
            tab={data.physical_id}
            key={data.physical_id}
          >
            <div>
              <Row>
                <Col span={4}>
                  <p>back arrow</p>
                </Col>
                <Col span={4}>
                  <p>status icon, {data.physical_id}</p>
                </Col>
                <Col span={4}>
                  <p>print icon</p>
                </Col>
                <Col span={4}></Col>
                <Col span={4}>cell status</Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col span={16}>chart history</Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col span={8}>
                  <p>{data.commune_name}</p>
                  <p>{data.village_name}</p>
                </Col>
                <Col span={8}>
                  <p>select dates</p>
                </Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col span={16}>
                  <h3>Data</h3>
                </Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col span={4}>
                  <p>Last upload</p>
                </Col>
                <Col span={4}>
                  <p>Total uploads</p>
                </Col>
                <Col span={4}>
                  <p>Total liters</p>
                </Col>
                <Col span={4}>
                  <p>Average liters</p>
                </Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col span={4}>{data.physical_id}</Col>
                <Col span={4}>{data.physical_id}</Col>
                <Col span={4}>{data.physical_id}</Col>
                <Col span={4}>{data.physical_id}</Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col span={16}>
                  <h3>Well</h3>
                </Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col span={4}>
                  <p>Constructed</p>
                </Col>
                <Col span={4}>
                  <p>Well Depth</p>
                </Col>
                <Col span={4}>
                  <p>Gateway code</p>
                </Col>
                <Col span={4}>
                  <p>Province</p>
                </Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col span={4}>{data.data_finished}</Col>
                <Col span={4}>{data.depth}</Col>
                <Col span={4}>
                  <p>5</p>
                </Col>
                <Col span={4}>{data.province_name}</Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col span={8}>
                  <p>notes</p>
                </Col>
                <Col span={8}>
                  <p>View full map</p>
                </Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col span={16}>
                  <ReactMapGl
                    {...viewport}
                    mapboxApiAccessToken={
                      "pk.eyJ1IjoiaHRyYW4yIiwiYSI6ImNrMmdmeWM2dDB1amkzY3AwNWgwNHRteXUifQ.jG0OQ6bMhr-sZYMkdj3H6w"
                    }
                    mapStyle="mapbox://styles/htran2/ck2gg912i09dt1cnhtuu1ar2u"
                    onViewportChange={viewport => {
                      setViewport(viewport);
                    }}
                  >
                    <Marker
                      key={data.physical_id}
                      latitude={data.latitude}
                      longitude={data.longitude}
                    >
                      <img
                        src="https://res.cloudinary.com/dfulxq7so/image/upload/v1573056725/Vector_1_xzgama.png"
                        alt="water icon"
                      />
                    </Marker>
                  </ReactMapGl>
                </Col>
                <Col span={4}></Col>
              </Row>
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default MonitorDetails;
