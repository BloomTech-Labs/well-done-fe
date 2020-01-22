import React from 'react'

import { FiMap } from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Content from '../../components/PopupInfoOverview/Content'
import '../../../src/components/PopupInfoOverview/Content.styles.scss'

function Legend() {
  return (
    <div>
      <Popup
        modal
        trigger={
          <h3 className='overviewpopup'>
            Legend <FiMap />
          </h3>
        }
      >
        {close => <Content close={close} />}
      </Popup>
    </div>
  )
}

export default Legend
