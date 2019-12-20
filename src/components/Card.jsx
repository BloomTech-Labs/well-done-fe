import React, { useState } from 'react'

import { css } from 'emotion'

const breakingPoints = {
  xl: '@media (max-width: 1200px)',
  lg: '@media (max-width: 1000px)',
  md: '@media (max-width: 800px)',
  sm: '@media (max-width: 600px)',
}

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
}

export default function Card({
  text,
  icon: Icon,
  color,
  value,
  toggle,
  toggleSummary,
  progress,
  cssStyles,
}) {
  return (
    <div
      className={css({
        backgroundColor: 'white',
        padding: '10px 20px 20px',
        color: '#2A2A32',
        borderRadius: 5,
        textAlign: 'center',
        width: '17%',
        marginBottom: 20,
        [breakingPoints.md]: {
          width: '48%',
        },
        ...cssStyles,
      })}
    >
      <div
        className={css({
          borderRadius: '50%',
          width: 40,
          height: 40,
          margin: '10px auto ',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: hexToRGB(color, 0.2),
        })}
      >
        <Icon size='20px' className={css({ opacity: 1, color: color })} />
      </div>
      <div
        className={css({
          paddingBottom: 10,
        })}
      >
        <h2
          className={css({
            margin: 0,
            fontSize: 50,
            fontWeight: 'bolder',
          })}
        >
          {value}
        </h2>
        <h3
          className={css({
            margin: 0,
            fontSize: 18,
            fontWeight: 400,
            opacity: 0.6,
          })}
        >
          {text}
        </h3>
      </div>
      {/* {toggle ? (
        <div css={{ padding: "20px 10px 0", outline: "none" }}>
          <details>
            <summary css={{ outline: "none", cursor: "pointer" }}>
              {toggleSummary}
            </summary>
            {toggle}
          </details>
        </div>
      ) : null} */}
      {progress ? (
        // <div
        //   css={{
        //     width: "100%",
        //     padding: "20px 10px 0",
        //     display: "flex",
        //     alignItems: "center",
        //   }}>
        //   <div
        //     css={{
        //       height: 10,
        //       width: "100%",
        //       backgroundColor: "#E0E0E0",
        //       borderRadius: 5,
        //     }}>
        //     <div
        //       css={{
        //         backgroundColor: color,
        //         width: `${progress}%`,
        //         height: "100%",
        //         borderRadius: 5,
        //       }}></div>
        //   </div>
        //   <p css={{ margin: "0 0 0 10px" }}>{progress}%</p>
        // </div>
        <div>
          <p
            className={css({
              margin: '10px auto 5px',
              fontSize: 20,
              fontWeight: 600,
              color: color,
            })}
          >
            {progress}%
          </p>
        </div>
      ) : null}
    </div>
  )
}
