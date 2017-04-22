import React from 'react'
import MetricSelectionSidebar from './MetricSelectionSidebar'
import Graphs from './Graphs'
import Line from './Line'

const Main = ({ selectMetric, metricsSelected }) => {

  const metrics = [
    'Opens',
    'Deliveries',
    'Clicks',
    'Unsubscribes',
    'Form Fills',
    'Hard Bounces',
    'Soft Bounces'
  ]

  return (
    <div className="main">
      <h2>How Are We Doing?</h2>
      <Line />
      <MetricSelectionSidebar
        selectMetric={selectMetric}
        metrics={metrics}
        metricsSelected={metricsSelected}
        />
    </div>
  )
}

export default Main
