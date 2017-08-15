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
      },
    }
    this.editProfile = this.editProfile.bind(this)
    this.saveProfileChanges = this.saveProfileChanges.bind(this)
    this.userFieldOnchange = this.userFieldOnchange.bind(this)
  }

  editProfile(e) {
    e.preventDefault()
    this.setState({
      editUser: true,
    })
  }

  saveProfileChanges(e) {
    e.preventDefault()
    this.setState({
      sending: true,
      sent: false,
    })
    console.log('fetch user:', this.props);
    // this.props.fetchUser()
    setTimeout( () => {
      this.setState({
        sending: false,
        sent: true,
        editUser: false,
      })
    }, 2000)
  }

  userFieldOnchange(e){
    e.preventDefault()
    this.setState({
      editedUser: {
        [e.target.id]: e.target.value,
      }
    })
  }

  render(){
    const { currentUser } = this.props

    const { sending,
            sent,
            error,
            editUser,
          } = this.state

    const { userName,
            userEmail,
            userCompany,
            userFullName,
            userTitle,
            userType,
            profilePic,
          } = this.state.editedUser

    if (editUser){
      return (
        <div className="profile settings block">
          <h3>Profile</h3>
          upload image
          <h4>Username</h4>
          <input type="text" id="userName" value={userName === null ? currentUser.userName : userName} onChange={this.userFieldOnchange} />
          <h4>Email</h4>
          <input type="email" id="userEmail" value={userEmail === null ? currentUser.userEmail : userEmail} onChange={this.userFieldOnchange} />
          <h4>Company Name</h4>
          <input type="text" id="userCompany" value={userCompany === null ? currentUser.userCompany : userCompany} onChange={this.userFieldOnchange} />
          <h4>Full Name</h4>
          <input type="text" id="userFullName" value={userFullName === null ? currentUser.userFullName : userFullName} onChange={this.userFieldOnchange} />
          <h4>Title</h4>
          <input type="text" id="userTitle" value={userTitle === null ? currentUser.userTitle : userTitle} onChange={this.userFieldOnchange} />
          <br/>
          <Button
            value={'Save Changes'}
            onClick={this.saveProfileChanges}/>
        </div>
      )
    }
    else {
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
            onClick={ this.editProfile }/>
        </div>
      )
    }
  }
}
