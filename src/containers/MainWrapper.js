import React, { Component } from 'react'
import SectionSidebar from '../components/SectionSidebar'
// import Footer from '../components/Footer'
// import TabBody from '../components/TabBody'

// import { tabs } from '../config'

// import EmailReport from '../containers/EmailReport'
// import CampaignComparison from '../containers/CampaignComparison'
// import ListGrowth from '../containers/ListGrowth'
// import EmailInsights from '../containers/EmailInsights'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      loaded: false,
      currentUser: null,
      }
  }
  componentWillMount(){
    this.setState({
      loading: true,
    })
    fetch('https://api.github.com/gists/3f9676cf0438778fab39a8235fff6f2d')
    .then( res => res.json() )
    .then( res => {
       const currentUser = JSON.parse(res.files['Charteco-Demo-User'].content).currentUser
       this.setState({
         loading: false,
         loaded: true,
         currentUser,
       })
    })
    .catch( error => {
      console.error('There was an error loading user data:', error)
      this.setState({
        error,
        loading: false,
        loaded: false,
      })
    })
  }

  render() {

    try {
      // console.log('selected data:', this.getSelectedData())
    }
    catch (ex){
      console.error(ex)
    }

    return (
      <div className="main">
        <SectionSidebar
          currentUser={this.state.currentUser}
          />
        {this.props.children}
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
