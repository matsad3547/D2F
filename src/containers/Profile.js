import React, { Component } from 'react'
import Button from '../components/Button'


export default class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      sending: false,
      sent: false,
      error: null,
      editUser: false,
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

  render(){
    const { currentUser } = this.props

    return (
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
    )
  }
}
