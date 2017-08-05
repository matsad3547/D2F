import React, { Component } from 'react'
import Button from '../components/Button'

export default class AccountSettings extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: null,
      userEmail: null,
      userCompany: null,
      userFullName: null,
      userTitle: null,
      userType: null,
      profilePic: null,
      accountType: null,
      accountUsers: 0,
      subExpDate: null,
    }
  }

  componentWillMount(){

  }

  render(){
    const {
      userName,
      userEmail,
      userCompany,
      userFullName,
      userTitle,
      userType,
      profilePic,
      accountType,
      accountUsers,
      subExpDate,
    } = this.state

    return (
      <div className="account-settings report">
        <div className="profile settings block">
          <h3>Profile</h3>
          This is the account settings page
        </div>
        <div className="settings">
          <div className="user-access block">
            <h3>User Access</h3>
            <p>You have {accountUsers} team members with platform access.</p>
            <Button
              value={'View Details'} />
          </div>
          <div className="subscription block">
            <h3>Subscription</h3>
            <p>Your subscription is active as a <span>basic account</span> and will automatically renew on <span>1/1/2018</span>.  Your current plan is $99.00 + tax per month.</p>
            <Button
              value={'View Details'} />
          </div>
        </div>
      </div>
    )
  }
}
