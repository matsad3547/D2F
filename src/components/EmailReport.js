import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import {
  addToArr,
  removeFromArr,
  calcRateVal,
  aggregateByTime,
  } from '../utils/'

import MetricSelection from './MetricSelection'
import RateSelection from './RateSelection'
import TimeGroupingBar from './TimeGroupingBar'
import EmailReportChartRecharts from './EmailReportChartRecharts'

export default class EmailReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: {},
        selectedData: [],
        metricsSelected: ['opens'],
        ratesSelected: ['delivery_rate'],
        timeGroup: 'month',
      }
    this.selectMetric = this.selectMetric.bind(this)
    this.selectRate = this.selectRate.bind(this)
    this.setTimeGroup = this.setTimeGroup.bind(this)
    this.getSelectedData = this.getSelectedData.bind(this)
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
        metricsSelected: removeFromArr(metricsSelected, metric)
      })
    }
    else {
      this.setState({
        metricsSelected: addToArr(metricsSelected, metric)
,      })
    }
  }
  selectRate(rate){
    const ratesSelected = this.state.ratesSelected
    const index = ratesSelected.indexOf(rate)
    if (index !== -1 && ratesSelected.length > 1) {
      this.setState({
        ratesSelected: removeFromArr(ratesSelected, rate),
      })
    }
    else {
      this.setState({
        ratesSelected: addToArr(ratesSelected, rate),
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
      const rates = this.state.ratesSelected
      const time = this.state.timeGroup
      const timeSeries = data.timeseries
      const selectedData = aggregateByTime(timeSeries, time)
                            .map( obj => {
        let selectedObj = {
          period: obj.period,
        }
        metrics.forEach( met => {
          Object.assign( selectedObj, {[met]: obj[met]})
        })
        rates.forEach( rate => {
          Object.assign( selectedObj, calcRateVal(obj, rate))
        })
        return selectedObj
      })
      return selectedData
    }
  }

  render() {

    return (
      <div className="report">
        <TimeGroupingBar
          setTimeGroup={this.setTimeGroup}
          timeGroupSelected={this.state.timeGroup}/>
        <div className="interactive-chart block" id="email-report">
          <EmailReportChartRecharts
            selectedData={this.getSelectedData()}
            metricsSelected={this.state.metricsSelected}
            ratesSelected={this.state.ratesSelected}
            />
          <MetricSelection
            selectMetric={this.selectMetric}
            metricsSelected={this.state.metricsSelected}
            />
          <RateSelection
            selectRate={this.selectRate}
            ratesSelected={this.state.ratesSelected}
            />
        </div>
      </div>
    );
  }
}
