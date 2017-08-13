import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import AccountSettings from '../containers/AccountSettings'
import DataAccounts from '../containers/DataAccounts'

const AccountTabs = (currentUser) => (

  <Tabs className="tabs">
    <TabList>
      <Tab><span className="icon-user"></span>Account Settings</Tab>
      <Tab><span className="icon-docs"></span>Data Accounts</Tab>
    </TabList>

    <TabPanel>
      <AccountSettings
        currentUser={currentUser}/>
    </TabPanel>
    <TabPanel>
      <DataAccounts />
    </TabPanel>
  </Tabs>
)

export default AccountTabs
