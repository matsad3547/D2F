import React, { Component } from 'react'
import Button from '../components/Button'

export default class AccountSettings extends Component {
  constructor(props){
    super(props)
    this.state = {
      sending: false,
      sent: false,
      error: null,
      data: null,
      editedUser: {
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
      },
    }
  }

  setEditedUser(e) {
    console.log('edit user value:');
  }

  render(){
    const { currentUser } = this.props

    const { loaded } = this.state

    return (
      <div className="account-settings report">
        <div className="profile settings block">
          <h3>Profile</h3>
          <img
            className="profile-picture"
            src={currentUser.userProfilePic ? currentUser.userProfilePic : ''}
            alt=""></img>
          <h4>Username</h4>
          <p>{currentUser.userName ? currentUser.userName : '(your username is loading...)'}</p>
          <h4>Email</h4>
          <p>{currentUser.userEmail ? currentUser.userEmail : '(your email is loading...)'}</p>
          <h4>Company Name</h4>
          <p>{currentUser.userCompany ? currentUser.userCompany : '(your company is loading...)'}</p>
          <h4>Full Name</h4>
          <p>{currentUser.userFullName ? currentUser.userFullName : '(your name is loading...)'}</p>
          <h4>Title</h4>
          <p>{currentUser.userTitle ? currentUser.userTitle : '(your title is loading...)'}</p>
          <Button
            value={'Edit Profile'}
            onClick={ () => console.log('editing user profile') }/>
        </div>
        <div className="settings">
          <div className="user-access block">
            <h3>User Access</h3>
            <p>You have {currentUser.accountUsers ? currentUser.accountUsers : '(# of users is loading...)'} team members with platform access.</p>
            <Button
              value={'View Details'}
              onClick={ () => console.log('showing user access info') }/>
          </div>
          <div className="subscription block">
            <h3>Subscription</h3>
            <p>Your subscription is active as a <span>{currentUser.accountType ? currentUser.accountType : '(account type is loading...)'} account</span> and will automatically renew on <span>1/1/2018</span>.  Your current plan is $99.00 + tax per month.</p>
            <Button
              value={'View Details'}
              onClick={ () => console.log('showing subscription info') }/>
          </div>
        </div>
      </div>
    )
  }
}
// { currentUser.userType === 'admin' ?
//   <h4>User Type</h4>
//   <p>Administrator</p>
//   : null }
