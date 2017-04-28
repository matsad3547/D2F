import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'
//
// const LineChart = rd3.LineChart

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        metricsSelected: [],
        data: {}
      }
    this.selectMetric=this.selectMetric.bind(this)
  }

  componentWillMount() {
    console.log("I'm gonna mount")

    fetch('https://api.github.com/gists/b20d0e6e7966fcfd732934b6bfea7ca2')
    .then( res => res.json() )
    .then( res => {
      this.setState({
        data: {
          test: res.files['D2F-test'].content
        }
      })
    })
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

  render() {
    return (
      <div className="App">
        <div className="header">
          <p>Here's some data from an endpoint: {this.state.data.test}</p>
          <h1>Welcome to D2F</h1>
          <p>here's some TEXT to see how to calibrate your vh</p>
        </div>
        <Main
          selectMetric={this.selectMetric}
          metricsSelected={this.state.metricsSelected}/>
      </div>
    );
  }
}

export default App

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getRandoData = () => new Array(12).fill().map( n => Math.random().toFixed(3) * 1000 )
