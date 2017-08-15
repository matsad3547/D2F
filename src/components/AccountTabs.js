import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import AccountSettings from './AccountSettings'
import DataAccounts from '../containers/DataAccounts'

const AccountTabs = (currentUser, fetchUser) => (

  <Tabs className="tabs">
    <TabList>
      <Tab><span className="icon-user"></span>Account Settings</Tab>
      <Tab><span className="icon-docs"></span>Data Accounts</Tab>
    </TabList>

    <TabPanel>
      <AccountSettings
        currentUser={currentUser}
        fetchUser={fetchUser}/>
    </TabPanel>
    <TabPanel>
      <DataAccounts />
    </TabPanel>
  </Tabs>
)

export default AccountTabs
