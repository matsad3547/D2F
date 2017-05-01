import React from 'react'
import rd3 from 'rd3'
// import { Line } from './LineChart'
// console.log('Line:', Line);
// import { Line } from 'react-charts'
// console.log('line:', Line ? Line : 'nothing');
import d3 from 'd3'

const LineChart = rd3.LineChart

const makeYearSeries = () => {
  const today = new Date()
  const oneYearAgo = new Date(today.setFullYear(new Date().getFullYear() - 1))
  const length = 365

  const max = 100
  const arr = new Array(length).fill(undefined)
  return arr.map( (d, i) => {
    return {
      x: new Date().setHours(oneYearAgo.getHours() + (24 * i)),
      y: Math.round(Math.random() * (max) + Math.round(Math.random() * 50)),
    }
  })
}

const EmailReportChart = ({ selectedData }) => {

  const lineData = [
      {
        name: 'Opens',
        values: makeYearSeries(),
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },
    ]

    const seriesVals = lineData[0].values
    const length = seriesVals.length
    const xStart = seriesVals[0].x
    const xEnd = seriesVals[length - 1].x
    const xDomain = [
      xStart - (0.0001 * xStart),
      xEnd + (0.0001 * xEnd),
    ]

    const yAccessor = d => {
      return d.y
    }

  return (
    <div className="chart">
      <LineChart
        circleRadius={3}
        axesColor='#FFF'
        colors={d3.scale.category10()}
        legend={false}
        data={lineData}
        width="100%"
        height="80vh"
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400,
        }}

        title="Metric Trend"
        xAxisLabel="Months"
        xAccessor={ d => {
            return new Date(d.x)
          }
        }
        xAxisTickInterval={{unit: 'months', interval: 2}}
        yAxisLabel="Metrics"
        yAccessor={ yAccessor }
        domain={{x: xDomain, y: [0]}}
        gridHorizontal={true}
        />
    </div>
  )
}

export default EmailReportChart
