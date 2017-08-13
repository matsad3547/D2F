import React, { Component } from 'react'
import Button from '../components/Button'


export default class Subscription extends Component {
  constructor(props){
    super(props)
    this.state = {
      viewSubscriptionDetails: false,
    }
  }

  render(){

    const { currentUser } = this.props

    return (
      <div className="subscription block">
        <h3>Subscription</h3>
        <p>Your subscription is active as a <span>{currentUser.accountType ? currentUser.accountType : '(account type is loading...)'} account</span> and will automatically renew on <span>1/1/2018</span>.  Your current plan is $99.00 + tax per month.</p>
        <Button
          value={'View Details'}
          onClick={ () => console.log('showing subscription info') }/>
      </div>
    )
  }
}
