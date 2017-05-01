import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'
import fetch from 'isomorphic-fetch'
//
// const LineChart = rd3.LineChart

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        metricsSelected: ['opens'],
        data: {},
      }
    this.selectMetric=this.selectMetric.bind(this)
  }

  componentWillMount() {

    fetch('https://api.github.com/gists/b20d0e6e7966fcfd732934b6bfea7ca2')
    .then( res => res.json() )
    .then( res => {
      this.setState({
        data: JSON.parse(res.files['D2F-test'].content)
      })
    })
    .catch( err => console.error('There was an error:', err) )
  }

  selectMetric(metric){
    const metricsSelected = this.state.metricsSelected
    const index = metricsSelected.indexOf(metric)
    if (index !== -1) {
      this.setState({
        metricsSelected: [
          ...this.state.metricsSelected.slice(0, index),
          ...this.state.metricsSelected.slice(index + 1),
        ]
      })
    }
    else {
      this.setState({
        metricsSelected: [...this.state.metricsSelected, metric]
      })
    }
  }

  getSelectedData() {
    const data = this.state.data
    if (data.timeseries !== undefined){
      const metrics = this.state.metricsSelected
      const selectedData = data.timeseries.map( obj => {
        let selectedObj = {
          timestamp: obj.timestamp,
        }
        metrics.forEach( met => {
          Object.assign( selectedObj, {[met]: obj[met]})
        })
        return selectedObj
      })
      return selectedData
    }
  }

  render() {

    try {
      // console.log('selected data:', this.getSelectedData())
    }
    catch (ex){
      console.error(ex)
    }

    // console.log('data:', this.state.data);
    return (
      <div className="App">
        <div className="header">

          <h1>Welcome to D2F</h1>
          <p>here's some TEXT to see how to calibrate your vh</p>
        </div>
        <Main
          selectMetric={this.selectMetric}
          selectedData={this.getSelectedData()}
          />
      </div>
    );
  }
}

export default App

// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ]
