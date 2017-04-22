import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'
//
// const LineChart = rd3.LineChart

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        metricsSelected: []
      }
    this.selectMetric=this.selectMetric.bind(this)
  }

  selectMetric(metric){
    const metricsSelected = this.state.metricsSelected
    const index = metricsSelected.indexOf(metric)
    if (index !== -1) {
      metricsSelected.splice(index, 1)
    }
    else {
      metricsSelected.push(metric)
    }
    this.setState({
      metricsSelected,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
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
