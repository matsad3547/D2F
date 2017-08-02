import React from 'react'
import { metrics, rates, months, days } from '../config/'
import {ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const CustomToolTip = ({  type,
                          payload,
                          label,
                          active,
                         }) => {

  const metricVals = metrics.map( obj => obj.value )
  const monthAbvs = months.map( obj => obj.abv )
  const dayAbvs = days.map( obj => obj.abv )
  const padding = 5

  if(active) {
    return (
      <div className="tooltip">
        <p style={{padding: padding, fontSize: '1.5em'}}>{
            monthAbvs.includes(label) ?
            months.find( month => month.abv === label).label :
             ( dayAbvs.includes(label) ? days.find( day => day.abv === label ).label : label)}</p>
        { payload.map( (obj, i) =>
          <p
            style={{color: obj.color, padding: 5}}
            key={`value-${i}`}>{
            metricVals.includes(obj.name) ?
            metrics.find( metric => obj.name === metric.value).label :
            rates.find( rate => obj.name === rate.value).label
          }: { metricVals.includes(obj.name) ?
            obj.value :
            (obj.value * 100).toFixed(1) + '%'}</p>
        )}
      </div>
    )
  }
  else return null
}

const EmailReportChartRecharts = ({ selectedData,
                                    metricsSelected, ratesSelected,
                                    width,
                                   }) => {

  if(selectedData) {
    return (
      <div className="chart">
        <h4>Performance Trend</h4>
        <ComposedChart className="chart" width={width} height={400} data={selectedData}
          margin={{top: 20, right: 20, bottom: 20, left: 0}}>
          <YAxis yAxisId="rate" hide={true}/>
          <XAxis dataKey="period"/>
          <YAxis />
          <Tooltip content={<CustomToolTip/>}/>
          <CartesianGrid stroke='#f5f5f5'/>
          { metricsSelected.map( (metricSelected, i) => <Bar
            key={`metric-${i}`}
            dataKey={metricSelected}
            barSize={(width - 60)/selectedData.length} fill={metrics.find( obj => obj.value === metricSelected ).color}
            />)}
          { ratesSelected.map( (rateSelected, i) => <Line
            key={`rate-${i}`} type='monotone' yAxisId="rate" dataKey={rateSelected} stroke={rates.find( obj => obj.value === rateSelected).color}/>)}
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

export default EmailReportChartRecharts
