import React from 'react'
import { metrics, rates, getRelevantKeys } from '../utils/'

// const {PropTypes} = React
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'


const EmailReportChartRecharts = ({ selectedData, metricsSelected, ratesSelected }) => {

  const container = document.getElementById('email-report')
  const width = container ? container.offsetWidth * .66 : 0

  if(selectedData) {
    return (
      <div className="chart">
        <h4>Performance Trend</h4>
        <ComposedChart className="chart" width={width} height={400} data={selectedData}
          margin={{top: 20, right: 20, bottom: 20, left: 0}}>
          <XAxis dataKey="period"/>
          <YAxis />
          <Tooltip/>
          <CartesianGrid stroke='#f5f5f5'/>
          { metricsSelected.map( (metricSelected, i) => <Bar
            key={`metric-${i}`}
            dataKey={metricSelected}
            barSize={(width - 60)/selectedData.length} fill={metrics.find( obj => obj.value === metricSelected ).color}
            />)}
        </ComposedChart>
      </div>
    )
  }
  else {
    return (
      <div className="chart">Data is loading...</div>
    )
  }
}

// const data = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
//               {name: 'Page B', uv: 868, pv: 967, amt: 1506},
//               {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
//               {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
//               {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
//               {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];


// <ComposedChart className="chart" width={width} height={400} data={data}
//   margin={{top: 20, right: 20, bottom: 20, left: 20}}>
//   <XAxis dataKey="name"/>
//   <YAxis />
//   <Tooltip/>
//   <Legend/>
//   <CartesianGrid stroke='#f5f5f5'/>
//   <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
//   <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
//   <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
// </ComposedChart>

export default EmailReportChartRecharts
