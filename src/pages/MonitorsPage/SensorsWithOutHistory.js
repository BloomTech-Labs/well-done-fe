import React from 'react'

const SensorsWithOutHistory = props => {
  let gIWO = props.gridInfoWithOutHistory
  let gIWH = props.gridInfo

  let WithoutHistory = []
  let WithHistory = []

  for (let i = 0; i < gIWO.length; i++) {
    WithoutHistory.push(gIWO[i].physical_id)
  }
  for (let i = 0; i < gIWH.length; i++) {
    WithHistory.push(gIWH[i].physical_id)
  }

  let physical_IDWOH = WithoutHistory.filter(
    item => !WithHistory.includes(item)
  )

  let sensorsWOH = []

  gIWO = gIWO.filter(item => {
    physical_IDWOH.forEach(items => {
      if (item.physical_id === items) {
        sensorsWOH.push(item)
      }
    })
  })

  console.log(sensorsWOH)

  return <></>
}
export default SensorsWithOutHistory
