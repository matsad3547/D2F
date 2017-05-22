import React from 'react'
import SectionSidebar from './SectionSidebar'
import EmailReport from '../containers/EmailReport'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

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
          <EmailReport />
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
