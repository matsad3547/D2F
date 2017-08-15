import React, { Component } from 'react'
import Button from '../components/Button'

export default class DataAccounts extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      loaded: false,
      error: null,
      accounts: null,
    }
  }

  componentWillMount(){
    this.setState({
      loading: true,
    })
    this.fetchAccounts()
  }

  fetchAccounts(){
    fetch('https://api.github.com/gists/3526fd51381b04f730cce9be03b13d2b')
    .then( res => res.json() )
    .then( res => {
      const accounts = JSON.parse(res.files['Charteco-Demo-Accounts'].content)
      console.log('accounts:', accounts);
      this.setState({
        accounts,
      })
    })
    .then( () => this.setState({
        loading: false,
        loaded: true,
      })
    )
    .catch( error => {
      console.error('There was an error loading email data:', error)
      this.setState({
        error,
        loading: false,
        loaded: false,
      })
    })
  }

  render(){

    const { loaded, accounts } = this.state

    if (loaded) {

      const accountKeys = Object.keys(accounts)

      return (
        <div className="data-accounts">
          <div className="data-account block">
            <h3>Accounts</h3>
            {accountKeys.map( (ak, i) => <Account
              key={`account-${i}`}
              account={accounts[ak]} /> ) }
            <Button
              value={'Save Changes'}
              onClick={ () => console.log('saving data accounts changes')}/>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="data-accounts">
          <div className="data-account block">Your accounts are loading...</div>
        </div>
      )
    }
  }
}

const Account = ({ account }) => (

  <div className="account block">
    <div>
      <img
        className={account.vendor}
        src={account.vendor_logo}
        alt=""></img>
      <h3>{account.label}</h3>
    </div>
    <div className="account-buttons">
      <Button
        value={'Rename'}
        onClick={ () => console.log('rename account')}/>
      <Button
        value={'Reauthenticate'}
        onClick={ () => console.log('reauthenticate account')}/>
      <Button
        value={'Delete Account'}
        onClick={ () => console.log('delete account')}/>
    </div>
  </div>
)
