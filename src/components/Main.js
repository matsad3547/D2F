import React from 'react'
import MetricSelectionSidebar from './MetricSelectionSidebar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import EmailReportChart from './EmailReportChart'
import { metrics, getMetricsSelected } from '../utils/'

const Main = ({ selectMetric, selectedData }) => {

  const metricsSelected = selectedData ?  getMetricsSelected(selectedData) : []

  return (
    <div className="main">
      <Tabs className="tabs">
        <TabList>
          <Tab>Email Report</Tab>
          <Tab>Campaign Comparisons</Tab>
          <Tab>Lists and Contacts</Tab>
          <Tab>Predictive</Tab>
        </TabList>

        <TabPanel>
          <EmailReportChart
            selectedData={selectedData}
            />
        </TabPanel>
        <TabPanel>
          <p>Campaign Comparisons will go here</p>

        </TabPanel>
        <TabPanel>
          <p>Lists and Contracts will go here</p>
        </TabPanel>
        <TabPanel>
          <p>Predictive stuff will go here</p>
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
