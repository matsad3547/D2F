import React, { Component } from 'react'
import Button from '../components/Button'

export default class AccountSettings extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      loaded: false,
      error: null,
      data: null,
      currentUser: null,
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

  setEditedUser(e) {
    console.log('edit user value:');
  }

  render(){
    const { loaded, currentUser } = this.state

    if(loaded) {
      return (
        <div className="account-settings report">
          <div className="profile settings block">
            <h3>Profile</h3>
            <img
              className="profile-picture"
               src={currentUser.userProfilePic}
               alt=""></img>
            <h4>Username</h4>
            <p>{currentUser.userName}</p>
            <h4>Email</h4>
            <p>{currentUser.userEmail}</p>
            <h4>Company Name</h4>
            <p>{currentUser.userCompany}</p>
            <h4>Full Name</h4>
            <p>{currentUser.userFullName}</p>
            <h4>Title</h4>
            <p>{currentUser.userTitle}</p>
            <Button
              value={'Edit Profile'}
              onClick={ () => console.log('editing user profile') }/>
          </div>
          <div className="settings">
            <div className="user-access block">
              <h3>User Access</h3>
              <p>You have {currentUser.accountUsers} team members with platform access.</p>
              <Button
                value={'View Details'}
                onClick={ () => console.log('showing user access info') }/>
            </div>
            <div className="subscription block">
              <h3>Subscription</h3>
              <p>Your subscription is active as a <span>{currentUser.accountType} account</span> and will automatically renew on <span>1/1/2018</span>.  Your current plan is $99.00 + tax per month.</p>
              <Button
                value={'View Details'}
                onClick={ () => console.log('showing subscription info') }/>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="block">User data is loading...</div>
      )
    }
  }
}
// { currentUser.userType === 'admin' ?
//   <h4>User Type</h4>
//   <p>Administrator</p>
//   : null }
