import React from 'react'
import Checkbox from './Checkbox'
import { metrics } from '../utils/'

const MetricSelection = ({ selectMetric, metricsSelected }) => {

  return (
    <div className="metric-select">
      <h4>Metrics</h4>
      { metrics.map( (metric, i) => <Checkbox
        selectValue={selectMetric}
        key={`metric-${i}`}
        value={metric}
        color={metric.bar}
        checked={metricsSelected.includes(metric.value)}/> )}
    </div>
  )
}

export default MetricSelection
