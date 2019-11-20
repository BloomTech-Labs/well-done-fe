import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { Bar } from "react-chartjs-2";
import { Tabs, Row, Col, Descriptions, Badge, Button } from "antd";
import "antd/dist/antd.css";
import "./MonitorDetail.css";
const { TabPane } = Tabs;

const MonitorDetails = props => {
  console.log("MonitorDetails Props", props);
  console.log("MonitorDetails Props Sensors ", props.sensors);
  console.log("MonitorDetails Props history", props.history);

  const [viewport, setViewport] = useState({
    latitude: 13.5651,
    longitude: 104.7538,
    width: "100%",
    height: "30vh",
    zoom: 7
  });

  return (
    <>
      <Tabs>
        {props.sensors.map(data1 => {
          const data3 = props.history.filter(data2 => {
            return data1.physical_id == data2.sensor_id;
          });
          const date = [];
          const firstPadCount = [];
          const secondPadCount = [];
          const thirdPadCount = [];
          const fourthPadCount = [];
          const firstPadSecond = [];
          const secondPadSecond = [];
          const thirdPadSecond = [];
          const fourthPadSecond = [];
          data3.map(data4 => {
            date.push(data4.date);
            firstPadCount.push(data4.pad_count_0);
            secondPadCount.push(data4.pad_count_1);
            thirdPadCount.push(data4.pad_count_2);
            fourthPadCount.push(data4.pad_count_3);
            firstPadSecond.push(data4.pad_seconds_0);
            secondPadSecond.push(data4.pad_seconds_1);
            thirdPadSecond.push(data4.pad_seconds_2);
            fourthPadSecond.push(data4.pad_seconds_3);
          });
          return (
            <TabPane
              value={data1.physical_id}
              tab={data1.physical_id}
              key={data1.physical_id}
            >
              <div>
                <Row>
                  <Col span={2}></Col>
                  <Col span={1}>
                    <Button type="primary" href="/dashboard" icon="environment">
                      Dashboard
                    </Button>
                  </Col>
                  <Col span={1}></Col>
                  <Col span={8}>
                    <Bar
                      data={{
                        labels: date,
                        datasets: [
                          {
                            label: "First Pad Count",
                            backgroundColor: "#6ba8a9",
                            data: firstPadCount
                          },
                          {
                            label: "Second Pad Count",
                            backgroundColor: "#3bb4c1",
                            data: secondPadCount
                          },
                          {
                            label: "Third Pad Count",
                            backgroundColor: "#e9e4e6",
                            data: thirdPadCount
                          },
                          {
                            label: "Fourth Pad Count",
                            backgroundColor: "#f6f5f5",
                            data: fourthPadCount
                          }
                        ]
                      }}
                    />
                  </Col>

                  <Col span={8}>
                    <Bar
                      data={{
                        labels: date,
                        datasets: [
                          {
                            label: "First Pad Second",
                            backgroundColor: "#6ba8a9",
                            data: firstPadSecond
                          },
                          {
                            label: "Second Pad Second",
                            backgroundColor: "#3bb4c1",
                            data: secondPadSecond
                          },
                          {
                            label: "Third Pad Second",
                            backgroundColor: "#e9e4e6",
                            data: thirdPadSecond
                          },
                          {
                            label: "Fourth Pad Second",
                            backgroundColor: "#f6f5f5",
                            data: fourthPadSecond
                          }
                        ]
                      }}
                    />
                  </Col>
                  <Col span={4}></Col>
                </Row>
                <Row>
                  <Col span={4}></Col>
                  <Col span={16}>
                    <Descriptions
                      title="Location"
                      layout="vertical"
                      bordered
                      column={{ xxl: 4 }}
                    >
                      <Descriptions.Item label="Commune">
                        {data1.commune_name}
                      </Descriptions.Item>
                      <Descriptions.Item label="Province">
                        {data1.Province_name}
                      </Descriptions.Item>
                      <Descriptions.Item label="Village">
                        {data1.village_name}
                      </Descriptions.Item>
                    </Descriptions>

                    <Descriptions
                      title="Pump"
                      layout="vertical"
                      bordered
                      column={{ xxl: 4 }}
                    >
                      <Descriptions.Item label="Status">
                        {data1.status == 2 ? (
                          <Badge status="processing" text="Running" />
                        ) : (
                          <Badge status="error" text="Not Running" />
                        )}
                      </Descriptions.Item>

                      <Descriptions.Item label="Constructed">
                        {data1.data_finished}
                      </Descriptions.Item>
                      <Descriptions.Item label="Depth">
                        {data1.depth}
                      </Descriptions.Item>
                      <Descriptions.Item label="Sensor">
                        {data1.physical_id}
                      </Descriptions.Item>
                    </Descriptions>
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
                        key={data1.physical_id}
                        latitude={data1.latitude}
                        longitude={data1.longitude}
                      >
                        {data1.status == 2 ? (
                          <img
                            src="https://res.cloudinary.com/dfulxq7so/image/upload/v1573056725/Vector_1_xzgama.png"
                            alt="water icon"
                          />
                        ) : (
                          <img
                            src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572636578/Vector_hixhff.png"
                            alt="water icon"
                          />
                        )}
                      </Marker>
                    </ReactMapGl>
                  </Col>
                  <Col span={4}></Col>
                </Row>
              </div>
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
};

export default MonitorDetails;
