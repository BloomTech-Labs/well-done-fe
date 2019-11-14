import React from "react";

import "./Home.styles.scss";
import Grid from "../components/Grid/Aggrid";


const Monitors = () => {
  return 
  <Grid />
};

export default Monitors;


import React, { useState, useEffect } from "react"
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi"
import Card from "../components/Card"
import { colors, breakingPoints } from "../components/Styles"
import BlankCard from "../components/BlankCard"
import { css } from 'emotion'
// import Nav from '../components/Nav'
import Grid from "../components/Grid/Aggrid";

export default function Monitors({ pumps }) {
  const [modalId, setModalId] = useState(null)

  return (
    <div className={css({ width: "100%", backgroundColor: '#F3F7FC', height: '100vh', display: 'flex' })}>
      <Nav />
      <div className={css({ width: '100%', padding: "20px 20px", maxWidth: 1240, margin: "0 auto" })}>
        {/* Card Section */}
        <div>
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            })}>
            <Card
              text="Monitor Reports"
              icon={FiEdit}
              value={pumps.length}
              color={colors.brand}
              toggleSummary="View Reports"
              toggle={<h3>Content</h3>}
            />
            <Card
              text="Functional"
              icon={FiCheckCircle}
              value={pumps.filter(pump => pump.status === 2).length}
              color={colors.success}
              progress={Math.ceil(
                (pumps.filter(pump => pump.status === 2).length /
                  pumps.length) *
                  100,
              )}
            />
            <Card
              text="Non-Functional"
              icon={FiAlertCircle}
              value={pumps.filter(pump => pump.status === 0).length}
              color={colors.danger}
              progress={Math.ceil(
                (pumps.filter(pump => pump.status === 0).length /
                  pumps.length) *
                  100,
              )}
            />
            <Card
              text="Unknown"
              icon={FiHelpCircle}
              value={pumps.filter(pump => pump.status === 1).length}
              color={colors.orange}
              progress={Math.ceil(
                (pumps.filter(pump => pump.status === 1).length /
                  pumps.length) *
                  100,
              )}
            />

            {/* End Card Section */}
            
            {/* AG-Grid Section */}
            <div
              className={css({
                width: "100%",
                marginBottom: 20,
                [breakingPoints.md]: {
                  width: "100%",
                },
              })}>
              <BlankCard style={{ padding: "10px " }}>
                {/* <Map pumps={pumps} setModalId={setModalId} /> */}
                <h2 className={css({ textAlign: 'center'})}>**AG-Grid Here**</h2>
              </BlankCard>
            </div>
            {/* End AG-Grid Section */}
            
          </div>
        </div>

        </div>

      </div>
    // </div>
  )
}
