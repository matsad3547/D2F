import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import {
  metrics,
  rates,
  addToArr,
  removeFromArr,
  calcRateVal,
  aggregateByTime,
  sortByValues,
  } from '../utils/'

import TimeGroupingBar from '../components/TimeGroupingBar'
import HeadlineCards from '../components/HeadlineCards'
import EmailReportChart from '../components/EmailReportChart'
import MetricSelection from '../components/MetricSelection'
import RateSelection from '../components/RateSelection'

import SlicersAndDicers from './SlicersAndDicers'

export default class EmailReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: {},
        selectedData: [],
        metricsSelected: ['emails_sent'],
        ratesSelected: ['delivery_rate'],
        timeGroup: 'month',
        slices: {
          accounts: ['Account A', 'Account B', 'Account C'],
          lists: ['List A', 'List B'],
          segments: ['Segment A', 'Segment B'],
          interestCategories: ['Interest A', 'Interest B'],
          locations: ['Utah', 'California', 'Oregon'],
          members: ['Dick Hertz', 'Bobby Pin'],
          campaignsOrEmails: ['Newsletter A', 'Promo B'],
        },
        slicesSelected: {},
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
        metricsSelected: removeFromArr(metricsSelected, metric),
      })
    }
    else {
      this.setState({
        metricsSelected: addToArr(metricsSelected, metric),
      })
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

      const metricVals = metrics.map( obj => obj.value )
      const rateVals = rates.map( obj => obj.value )
      const time = this.state.timeGroup
      const timeSeries = data.timeseries
      const selectedData = aggregateByTime(timeSeries, time)
                            .map( obj => {
        let selectedObj = {
          period: obj.period,
        }
        metricVals.forEach( met => {
          Object.assign( selectedObj, {[met]: obj[met]})
        })
        rateVals.forEach( rate => {
          Object.assign( selectedObj, calcRateVal(obj, rate))
        })
        return selectedObj
      })
      return selectedData
    }
  }

  render() {
    const container = document.getElementById('email-report')
    const width = container ? container.offsetWidth * .66 : 0

    return (
      <div className="report">
        <TimeGroupingBar
          setTimeGroup={this.setTimeGroup}
          timeGroupSelected={this.state.timeGroup}>
          <SlicersAndDicers slices={this.state.slices}/>
        </TimeGroupingBar>
        <HeadlineCards
          selectedData={this.getSelectedData()}
          />
        <div className="interactive-chart block" id="email-report">
          <EmailReportChart
            selectedData={this.getSelectedData()}
            metricsSelected={sortByValues(metrics, this.state.metricsSelected)}
            ratesSelected={sortByValues(rates, this.state.ratesSelected)}
            width={width}
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
