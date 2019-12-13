import React from "react";
import { Pie } from "react-chartjs-2";

function PercentageChart({ funcPumps, nonPumps, unPumps }) {
  // Pie chart settings
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
  // Pie chart settings - end
  return (
    <div>
      <Pie data={data} options={option} />
    </div>
  );
}

export default PercentageChart;
