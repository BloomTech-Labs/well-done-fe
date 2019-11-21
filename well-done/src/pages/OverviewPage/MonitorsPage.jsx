import React, { useState, useEffect } from "react";
import Grid from "../../components/Grid/Aggrid";
import AxiosWithAuth from "../../components/AxiosWithAuth/axiosWithAuth";
import Monitors from "../../components/Monitors/Monitors";
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
  console.log("pumpData", pumpData);
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
          maxWidth: 1240,
          margin: "0 auto",
          paddingLeft: "250px"
        })}
      >
        {/* Card Section */}
        <div>
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

            {/* End Card Section */}

            {/* AG-Grid Section */}
            <div
              className={css({
                width: "100%",
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
            {/* End AG-Grid Section */}
          </div>
        </div>
      </div>
      {/* eND JOSHS TEST */}
    </div>
  );
};

export default MonitorsPage;
