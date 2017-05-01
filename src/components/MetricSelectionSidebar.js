import React from 'react'
import Checkbox from './Checkbox'
import { metrics } from '../utils/'
import d3 from 'd3'

const MetricSelectionSidebar = ({ selectMetric, metricsSelected }) => {

  const scale = d3.scale.category10()
  const colors = scale.range()

  console.log('colors:', colors);

  return (

    <div className="metric-sidebar">
      <h3>Choose your Metrics</h3>
      { metrics.map( (metric, i) => <Checkbox
        selectMetric={selectMetric}
        key={i}
        metric={metric}
        color={colors[i]}
        checked={metricsSelected.includes(metric.value)}/> )}
    </div>
  )
}

export default MetricSelectionSidebar
