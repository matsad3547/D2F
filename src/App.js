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
        data: {},
        metricsSelected: ['opens'],
        ratesSelected: ['opens'],
        timeGroup: 'month',
        user: 'Noobie Matt',
        userCompany: 'D2F',
      }
    this.selectMetric = this.selectMetric.bind(this)
    this.selectRate = this.selectRate.bind(this)
    this.setTimeGroup = this.setTimeGroup.bind(this)
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
    if (index !== -1 && metricsSelected.length > 1) {
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
  selectRate(rate){
    const ratesSelected = this.state.ratesSelected
    const index = ratesSelected.indexOf(rate)
    if (index !== -1 && ratesSelected.length > 1) {
      this.setState({
        ratesSelected: [
          ...this.state.ratesSelected.slice(0, index),
          ...this.state.ratesSelected.slice(index + 1),
        ]
      })
    }
    else {
      this.setState({
        ratesSelected: [...this.state.ratesSelected, rate]
      })
    }
  }

  setTimeGroup(timeGroup) {
    this.setState({
      timeGroup,
    })
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
      console.log('selected data at app:', selectedData);
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
        <Main
          selectMetric={this.selectMetric}
          selectRate={this.selectRate}
          setTimeGroup={this.setTimeGroup}
          timeGroupSelected={this.state.timeGroup}
          ratesSelected={this.state.ratesSelected}
          selectedData={this.getSelectedData()}
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
