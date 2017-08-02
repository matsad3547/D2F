import React from 'react'
import ValueCheckbox from './ValueCheckbox'
import { metrics } from '../config/'

const MetricSelection = ({ selectMetric, metricsSelected }) => {

  return (
    <div className="metric-select">
      <h4>Metrics</h4>
      { metrics.map( (metric, i) => <ValueCheckbox
        selectValue={selectMetric}
        key={`metric-${i}`}
        value={metric}
        color={metric.color}
        checked={metricsSelected.includes(metric.value)}/> )}
    </div>
  )
}

export default MetricSelection
