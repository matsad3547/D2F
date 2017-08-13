import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import EmailReport from '../containers/EmailReport'
import CampaignComparison from '../containers/CampaignComparison'
import ListGrowth from '../containers/ListGrowth'
import EmailInsights from '../containers/EmailInsights'


const EmailTabs = (currentUser) => (

  <Tabs className="tabs">
    <TabList>
      <Tab><span className="icon-envelope"></span>Email Report</Tab>
      <Tab><span className="icon-docs"></span>Campaign Comparisons</Tab>
      <Tab><span className="icon-rocket"></span>Lists Growth</Tab>
      <Tab><span className="icon-vector"></span>Email Insights</Tab>
    </TabList>

    <TabPanel>
      <EmailReport />
    </TabPanel>
    <TabPanel>
      <CampaignComparison />
    </TabPanel>
    <TabPanel>
      <ListGrowth />
    </TabPanel>
    <TabPanel>
      <EmailInsights />
    </TabPanel>
  </Tabs>
)

export default EmailTabs
