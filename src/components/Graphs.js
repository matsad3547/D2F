import React from 'react'
import rd3 from 'rd3'
import * as stuff from 'react-charts'
// import Line from './LineChart'
import _ from 'lodash'
// import { Line } from './LineChart'
// console.log('Line:', Line);

console.log('react charts:', stuff ? stuff : 'nothing here');

import { Line } from 'react-charts'

console.log('line:', Line ? Line : 'nothing');


const LineChart = rd3.LineChart

function makeData () {
  return _.map(_.range(Math.max(Math.round((Math.random() * 4)), 1)), d => makeSeries())
}
function makeSeries () {
  const startDate = new Date()
  // const length = Math.round(Math.random() * 30)
  const length = 30
  const max = 100
  // const max = Math.random() > 0.5 ? 100000 : 10
  // const multiplier = 10
  // const multiplier = Math.round((Math.random() * 10) + Math.round(Math.random() * 50))
  return _.map(_.range(length), d => ({
    // x: d * multiplier,
    x: new Date().setMinutes(startDate.getMinutes() + (30 * d)),
    y: Math.round(Math.random() * (max) + Math.round(Math.random() * 50)),
    r: Math.round(Math.random() * 5)
  }))
}

console.log('data:', makeData());

const Graphs = () => {
  const data = makeData()
  return (
    <div className="graphs">
      <TrendChart />
    </div>
  )
}

export default Graphs


// const lineData = [
//     {
//       name: 'series1',
//       values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
//       strokeWidth: 3,
//       strokeDashArray: "5,5",
//     },
//     {
//       name: 'series2',
//       values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
//     },
//     {
//       name: 'series3',
//       values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
//     }
//   ]
//
//   const RCLineChart = (
//     <Line
//       data={lineData}
//       />
//   )
const TrendChart = (props) => {

  const lineData = [
      {
        name: 'series1',
        values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },
      {
        name: 'series2',
        values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
      },
      {
        name: 'series3',
        values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
      }
    ];

  return (
    <div className="chart">
      <LineChart
        circleRadius={5}
        legend={true}
        data={lineData}
        width="100%"
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400,
        }}
        title="Trends"
        yAxisLabel="Metrics"
        xAxisLabel="Months"
        domain={{x: [-1, 6], y: [-10]}}
        gridHorizontal={true}
        />
    </div>
  )
}
