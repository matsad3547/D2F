import React from 'react'
// import SectionSidebar from './SectionSidebar'
import EmailReport from '../containers/EmailReport'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const TabBody = ({ tabs }) => {

  const tabKeys = Object.keys(tabs)
  console.log('tab keys:', tabKeys,
  'tab object:', tabs[tabKeys[0]]
);

  return (
    <Tabs className="tabs">
      <TabList>
        {tabKeys.map( (tk, i) => <Tab key={`tab-${i}`}><span className={tabs[tk].span}></span>{tabs[tk].label}</Tab>)}
      </TabList>
      <TabPanel >
        <EmailReport/>
      </TabPanel>)
    </Tabs>
  )
}

export default TabBody

// {tabKeys.map( (tk, i) =>
// <TabPanel key={`tab-panel-${i}`}>
//   {tabs[tk].component}
// </TabPanel>)}
