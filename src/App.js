import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        user: 'Noobie Matt',
        userCompany: 'D2F',
      }
  }

  render() {

    try {
      // console.log('selected data:', this.getSelectedData())
    }
    catch (ex){
      console.error(ex)
    }

    return (
      <div className="App">
        <Main
          user={this.state.user}
          userCompany={this.state.userCompany}
          />
        <div className="footer">
          <p>Boogie Charts Inc
          Salt Lake City, Utah</p>
        </div>
      </div>
    );
  }
}

export default App
