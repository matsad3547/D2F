import React from 'react'
import Checkbox from './Checkbox'
import { metrics } from '../utils/'
import d3 from 'd3'

const MetricSelectionSidebar = ({ selectMetric, metricsSelected }) => {

  // const colors = d3.scale
  //                 .category10()
  //                 .range()

  // console.log('colors:', colors);

  return (

    <div className="metric-sidebar">
      <h3>Choose your Metrics</h3>
      { metrics.map( (metric, i) => <Checkbox
        selectMetric={selectMetric}
        key={i}
        metric={metric}
        
        checked={metricsSelected.includes(metric.value)}/> )}
    </div>
  )
}

export default MetricSelectionSidebar
