import React from 'react'
import Checkbox from './Checkbox'
import { metrics } from '../utils/'

const MetricSelectionSidebar = ({ selectMetric, metricsSelected }) => {

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
