import React from 'react'
import { useSelector } from 'react-redux'
import { Pie } from 'react-chartjs-2'
import '../MonitorsPage/Monitors/MonitorsPage.scss'

function PercentageChart({ nonPumps /* funcPumps unPumps*/ }) {
  const recentHistory = useSelector(state => state.historyReducer.recentHistory)

  let funcPumps = 0
  let unPumps = 0

  for (const pump of Object.keys(recentHistory)) {
    if (recentHistory[pump] === 'yes') {
      funcPumps++
    } else {
      unPumps++
    }
  }
  const data = {
    datasets: [
      {
        data: [funcPumps, nonPumps.length, unPumps],
        backgroundColor: ['#01c000', '#f44336', '#FFAD34'],
      },
    ],
  }
  const option = {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex]
          const meta = dataset._meta[Object.keys(dataset._meta)[0]]
          const total = meta.total
          const currentValue = dataset.data[tooltipItem.index]
          const percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(1)
          )
          return currentValue + ' (' + percentage + '%)'
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index]
        },
        responsive: false,
      },
    },
  }
  // Pie chart settings - end
  return (
    <div className='pieCanvas'>
      <Pie className='insidePie' data={data} options={option} />
    </div>
  )
}

export default PercentageChart
