import React, { useState, useEffect } from "react";
import Grid from "../../components/Grid/Aggrid";
import AxiosWithAuth from "../../components/AxiosWithAuth/axiosWithAuth";

import "./MonitorsPage.scss";
import StaticMenu from "../../components/Menu/StaticMenu";
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle
} from "react-icons/fi";
import Card from "../../components/Card.jsx";
// import { colors, breakingPoints } from "../components/Styles";
import BlankCard from "../../components/BlankCard.jsx";
import { css } from "emotion";

import { Line, Pie, Bar, Polar, Doughnut } from "react-chartjs-2";

import Popup from "reactjs-popup";
import Content from "../../../src/components/PopupInfoOverview/Content"
import "../../../src/components/PopupInfoOverview/Content.styles.scss"


import { FiMap } from 'react-icons/fi';


const colors = {
  main: "#fff",
  brand: "#0282FA",
  btnHover: "#1C49BB",
  backgroundColor: "#F3F7FC",
  text: "#886BFE",
  success: "#01c000",
  danger: "#f44336",
  orange: "#FFAD34",
  darkText: "#2A2A32"
};

const breakingPoints = {
  xl: "@media (max-width: 1200px)",
  lg: "@media (max-width: 1000px)",
  md: "@media (max-width: 800px)",
  sm: "@media (max-width: 600px)"
};

const MonitorsPage = ({ history }) => {
  const [pumpData, setPumpData] = useState([]);
  const [funcPumps, setFuncPumps] = useState([]);
  const [unPumps, setUnPumps] = useState([]);
  const [nonPumps, setNonPumps] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get("https://welldone-db.herokuapp.com/api/sensors/recent")
      .then(res => {
        // console.log(res.data)
        setPumpData(res.data);
        setFuncPumps(res.data.filter(pump => pump.status === 2));
        setUnPumps(res.data.filter(pump => pump.status === 1));
        setNonPumps(
          res.data.filter(pump => pump.status === 0 || pump.status === null)
        );
        // setSensorStatus(res.data)
        // let data = processData(res.data)
        // setSensorStatus(data)
      });
  }, []);

  // useEffect(() => {

  // },[])

  const data = {
    labels: ["Functional", "Non-Functional", "Unknown"],
    datasets: [
      {
        data: [funcPumps.length, nonPumps.length, unPumps.length],
        backgroundColor: ["#01c000", "#f44336", "#FFAD34"]
      }
    ]
  };

  const option = {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const meta = dataset._meta[Object.keys(dataset._meta)[0]];
          const total = meta.total;
          const currentValue = dataset.data[tooltipItem.index];
          const percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(1)
          );
          return currentValue + " (" + percentage + "%)";
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        }
      }
    }
  };

  return (
    <div
      className="parent-div"
      style={{ backgroundColor: "#f3f7fc", width: "100vw", height: "100vh" }}
    >
      <div className="monitormenu">
        <StaticMenu history={history} />
      </div>
      {/* <div className="monitorspage">
    <Monitors/>
     <Grid/>
    </div>  */}
      {/* JOSHS tEST */}
      <div
        className={css({
          width: "100%",
          padding: "20px 20px",
          // maxWidth: 1640,
          margin: "0 auto",
          paddingLeft: "250px"
        })}
      >
        {/* Card Section */}
        <div>
        <Popup modal trigger={<h4 className="overviewpopup">Legend <FiMap /></h4> } >
            {close => <Content close={close} />}
      </Popup>

          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap"
            })}
          >
            <Card
              text="Monitor Reports"
              icon={FiEdit}
              // value={pumps.length}
              value={pumpData.length}
              color={colors.brand}
              toggleSummary="View Reports"
              toggle={<h3>Content</h3>}
            />
            
            <Card
              text="Functional"
              icon={FiCheckCircle}
              // value={pumps.filter(pump => pump.status === 2).length}
              value={funcPumps.length}
              color={colors.success}
              // progress={Math.ceil(
              //   (pumps.filter(pump => pump.status === 2).length /
              //     pumps.length) *
              //     100
              // )}
            />
            <Card
              text="Non-Functional"
              icon={FiAlertCircle}
              // value={pumps.filter(pump => pump.status === 0).length}
              value={nonPumps.length}
              color={colors.danger}
              // progress={Math.ceil(
              //   (pumps.filter(pump => pump.status === 0).length /
              //     pumps.length) *
              //     100
              // )}
            />
            <Card
              text="Unknown"
              icon={FiHelpCircle}
              // value={pumps.filter(pump => pump.status === 1).length}
              color={colors.orange}
              value={unPumps.length}
              // progress={Math.ceil(
              //   (pumps.filter(pump => pump.status === 1).length /
              //     pumps.length) *
              //     100
              // )}
            />

            {/* <div className={css({ display: "flex" })}> */}
            {/* End Card Section */}

            {/* AG-Grid Section */}
            <div
              className={css({
                width: "65%",
                marginBottom: 20,
                [breakingPoints.md]: {
                  width: "100%"
                }
              })}
            >
              <BlankCard style={{ padding: "10px " }}>
                {/* <Map pumps={pumps} setModalId={setModalId} /> */}
                <h2 className={css({ textAlign: "center" })}>
                  <Grid />
                </h2>
              </BlankCard>

            </div>
            <div
              className={css({
                width: "35%"
              })}
            >
              <BlankCard>
                <Pie data={data} options={option} />
              </BlankCard>
            </div>
            {/* <div className={css({ width: "35%" })}>
              <Pie data={data} options={option} />
            </div> */}

            {/* End AG-Grid Section */}
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* eND JOSHS TEST */}
    </div>
  );
};

export default MonitorsPage;
