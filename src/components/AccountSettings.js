import React from 'react'
import Profile from '../containers/Profile'
import UserAccess from '../containers/UserAccess'
import Subscription from '../containers/Subscription'

const AccountSettings = ({ currentUser }) => (

  <div className="account-settings report">
    <Profile currentUser={currentUser}/>
    <div className="settings">
      <UserAccess currentUser={currentUser}/>
      <Subscription currentUser={currentUser}/>
    </div>
  </div>
)

export default AccountSettings
