import React, { Component } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'

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
        <Footer />
      </div>
    );
  }
}

export default App
