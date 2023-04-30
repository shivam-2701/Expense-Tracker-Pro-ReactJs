import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  let maxValue = 0;
  for (let el of props.dataPoints) {
    maxValue += el.value;
  }
  console.log(maxValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
