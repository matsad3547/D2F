import React, { Component } from 'react'
import SectionSidebar from '../components/SectionSidebar'
import Footer from '../components/Footer'
// import TabBody from '../components/TabBody'

// import { tabs } from '../config'

import EmailReport from '../containers/EmailReport'
import CampaignComparison from '../containers/CampaignComparison'
import ListGrowth from '../containers/ListGrowth'
import EmailInsights from '../containers/EmailInsights'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
        user: 'Noobie Matt',
        userCompany: 'D2F',
      }
  }

  render() {

    try {
      // console.log('selected data:', this.getSelectedData())
    }
    catch (ex){
      console.error(ex)
    }

    return (
      <div>
        <div className="main">
          <SectionSidebar
            user={this.state.user}
            userCompany={this.state.userCompany}
            />
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
        </div>
        <Footer />
      </div>
    );
  }
}

// <TabBody
//   tabs={tabs.email}/>

// const Main = ({ user, userCompany }) => {
//
//   return (
//     <div className="main">
//       <SectionSidebar
//         user={user}
//         userCompany={userCompany}
//         />
      // <Tabs className="tabs">
      //   <TabList>
      //     <Tab><span className="icon-envelope"></span>Email Report</Tab>
      //     <Tab>Campaign Comparisons</Tab>
      //     <Tab>Lists and Contacts</Tab>
      //     <Tab>Predictive</Tab>
      //   </TabList>
      //
      //   <TabPanel>
      //     <EmailReport />
      //   </TabPanel>
      //   <TabPanel>
      //     <p>Campaign Comparisons will go here</p>
      //   </TabPanel>
      //   <TabPanel>
      //     <p>Lists and Contracts will go here</p>
      //   </TabPanel>
      //   <TabPanel>
      //     <p>Predictive stuff will go here</p>
      //   </TabPanel>
      // </Tabs>
//     </div>
//   )
// }
//
// export default Main
