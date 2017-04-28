import React from 'react'
import MetricSelectionSidebar from './MetricSelectionSidebar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Graphs from './Graphs'

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
      <Tabs className="tabs">
        <TabList>
          <Tab>Line Chart</Tab>
          <Tab>Something Else</Tab>
          <Tab>Some other Thing</Tab>
        </TabList>

        <TabPanel>
          <Graphs />
        </TabPanel>
        <TabPanel>
          <p>Some other shit will go here</p>
        </TabPanel>
        <TabPanel>
          <p>And yet more stuff here</p>
        </TabPanel>
      </Tabs>
      <MetricSelectionSidebar
        selectMetric={selectMetric}
        metrics={metrics}
        metricsSelected={metricsSelected}
        />
    </div>
  )
}

export default Main
