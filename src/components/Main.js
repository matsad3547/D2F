import React from 'react'
import MetricSelection from './MetricSelection'
import RateSelection from './RateSelection'
import SectionSidebar from './SectionSidebar'
import TimeGroupingBar from './TimeGroupingBar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import EmailReportChartRecharts from './EmailReportChartRecharts'
import { getMetricsSelected } from '../utils/'

const Main = ({
    selectMetric,
    selectRate,
    setTimeGroup,
    timeGroupSelected,
    ratesSelected,
    selectedData,
    user,
    userCompany,
  }) => {

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
          <TimeGroupingBar
            setTimeGroup={setTimeGroup}
            timeGroupSelected={timeGroupSelected}/>
          <div className="interactive-chart block">
            <EmailReportChartRecharts
              selectedData={selectedData}
              />
            <MetricSelection
              selectMetric={selectMetric}
              metricsSelected={metricsSelected}
              />
            <RateSelection
              selectRate={selectRate}
              ratesSelected={ratesSelected}
              />
          </div>

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
