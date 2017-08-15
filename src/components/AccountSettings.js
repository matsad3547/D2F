import React from 'react'
import Profile from '../containers/Profile'
import UserAccess from '../containers/UserAccess'
import Subscription from '../containers/Subscription'

const AccountSettings = ({ currentUser, fetchUser }) => (

  <div className="account-settings report">
    <Profile
      currentUser={currentUser}
      fetchUser={fetchUser}
      />
    <div className="settings">
      <UserAccess currentUser={currentUser}/>
      <Subscription currentUser={currentUser}/>
    </div>
  </div>
)

export default AccountSettings
