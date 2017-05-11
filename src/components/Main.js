import React from 'react'
import MetricSelectionSidebar from './MetricSelectionSidebar'
import SectionSidebar from './SectionSidebar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import EmailReportChartRecharts from './EmailReportChartRecharts'
import { metrics, getMetricsSelected } from '../utils/'

const Main = ({ selectMetric,
                selectedData,
                user,
                userCompany }) => {

  const metricsSelected = selectedData ?  getMetricsSelected(selectedData) : []

  return (
    <div className="main">
      <SectionSidebar
        user={user}
        userCompany={userCompany}
        />
      <Tabs className="tabs">
        <TabList>
          <Tab><span className="icon-envelope"></span>Email Report</Tab>
          <Tab>Campaign Comparisons</Tab>
          <Tab>Lists and Contacts</Tab>
          <Tab>Predictive</Tab>
        </TabList>

        <TabPanel>
          <EmailReportChartRecharts
            selectedData={selectedData}
            />
          <MetricSelectionSidebar
            selectMetric={selectMetric}
            metrics={metrics}
            metricsSelected={metricsSelected}
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
    </div>
  )
}

export default Main
