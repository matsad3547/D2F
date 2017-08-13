import React, { Component } from 'react'
import SectionSidebar from '../components/SectionSidebar'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      loaded: false,
      currentUser: null,
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

  render() {

    return (
      <div className="main">
        <SectionSidebar
          currentUser={this.state.currentUser}
          />
        {React.cloneElement(this.props.children, this.state.currentUser)}
      </div>
    )
  }
}
