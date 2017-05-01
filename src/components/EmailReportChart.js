import React from 'react'
import rd3 from 'rd3'
// import { Line } from './LineChart'
// console.log('Line:', Line);
// import { Line } from 'react-charts'
// console.log('line:', Line ? Line : 'nothing');
import d3 from 'd3'
import { metrics, getMetricsSelected } from '../utils'

const LineChart = rd3.LineChart

const getDisplayData = selectedData => {
  const selectedMetrics = getMetricsSelected(selectedData)
  const data = selectedMetrics.map( met => {
    let series = {
      name: metrics.find( metric => metric.value === met).label,
      values: selectedData.map( d => {
        return {
          x: Date.parse(d.timestamp),
          y: d[met],
        }
      })
    }
    return series
  })
  return data
}

const EmailReportChart = ({ selectedData }) => {

  if (selectedData !== undefined) {
    const data = getDisplayData(selectedData)
    const seriesVals = data[0].values
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
      <div className="chart" >
        <LineChart

          circleRadius={3}
          colors={d3.scale.category10()}
          legend={false}
          data={data}
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
  else {
    return (
      <div>
        <p>Data is loading</p>
      </div>
    )
  }
}

export default EmailReportChart
