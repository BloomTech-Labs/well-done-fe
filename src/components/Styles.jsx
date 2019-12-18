import React from 'react'
import { css } from 'emotion'
import { Global } from '@emotion/core'
import { FiHelpCircle, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

export const colors = {
  main: '#fff',
  brand: '#0282FA',
  // btnHover: "#1C49BB",
  backgroundColor: '#F3F7FC',
  text: '#886BFE',
  success: '#01c000',
  danger: '#f44336',
  orange: '#FFAD34',
  darkText: '#2A2A32',
}

export const breakingPoints = {
  xl: '@media (max-width: 1200px)',
  lg: '@media (max-width: 1000px)',
  md: '@media (max-width: 800px)',
  sm: '@media (max-width: 600px)',
}

export const getPumpStyles = ({ iconSize = 20 }) => {
  return {
    status: {
      0: {
        icon: (
          <FiAlertCircle
            size={`${iconSize}px`}
            className={css({ opacity: 1, color: colors.danger })}
          />
        ),
        color: colors.danger,
      },
      1: {
        icon: (
          <FiHelpCircle
            size={`${iconSize}px`}
            className={css({ opacity: 1, color: colors.orange })}
          />
        ),
        color: colors.orange,
      },
      2: {
        icon: (
          <FiCheckCircle
            size={`${iconSize}px`}
            className={css({ opacity: 1, color: colors.success })}
          />
        ),
        color: colors.success,
      },
    },
  }
}

export default function Styles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background-color: ${colors.backgroundColor};
        }

        h1 {
          color: ${colors.darkText};
        }
      `}
    />
  )
}
