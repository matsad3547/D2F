import React from 'react'
import Checkbox from './Checkbox'

const MetricSelectionSidebar = ({ metrics, selectMetric, metricsSelected }) => {

  return (

    <div className="metric-sidebar">
      <h3>Choose your Metrics</h3>
      { metrics.map( metric => <Checkbox
        selectMetric={selectMetric}
        key={metric}
        metric={metric}
        checked={metricsSelected.includes(metric)}/> )}
    </div>
  )
}

export default MetricSelectionSidebar
