import React, { Component } from 'react'
import Button from '../components/Button'


export default class UserAccess extends Component {
  constructor(props){
    super(props)
    this.state = {
      viewAdminDetails: false,
    }
  }

  render(){

    const { currentUser } = this.props

    return (
      <div className="user-access block">
        <h3>User Access</h3>
        <p>You have {currentUser.accountUsers ? currentUser.accountUsers : '(# of users is loading...)'} team members with platform access.</p>
        <Button
          value={'View Details'}
          onClick={ () => console.log('showing user access info') }/>
      </div>
    )
  }
}
