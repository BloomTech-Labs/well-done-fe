import React from 'react'
import { css } from 'emotion'

import Popup from 'reactjs-popup'
import Content from '../../src/components/PopupInfo/Content'
import '../../src/components/PopupInfo/Content.styles.scss'

import { FiWifi } from 'react-icons/fi'

export default function BlankCard({ children, style }) {
  return (
    <div
      className={css({
        backgroundColor: '#f3f7f',
        padding: '10px 20px',
        color: 'black',
        borderRadius: 5,
        ...style,
      })}
    >
      {children}
    </div>
  )
}
