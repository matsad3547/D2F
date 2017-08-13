import React, { Component } from 'react'
import { metrics, rates } from '../config/'
import {
  addToArr,
  removeFromArr,
  sortByValues,
  } from '../utils/'

import TimeGroupingBar from '../components/TimeGroupingBar'
import HeadlineCards from '../components/HeadlineCards'
import EmailReportChart from '../components/EmailReportChart'
import MetricSelection from '../components/MetricSelection'
import RateSelection from '../components/RateSelection'
import EmailReportTable from '../components/EmailReportTable'

import SlicersAndDicers from './SlicersAndDicers'

export default class EmailReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
        loading: false,
        loaded: false,
        error: null,
        data: {},
        metricsSelected: ['emails_sent'],
        ratesSelected: ['delivery_rate'],
        timeGroup: 'month',
        slices: {},
        slicesSelected: null,
        tableData: null,
      }
    this.selectMetric = this.selectMetric.bind(this)
    this.selectRate = this.selectRate.bind(this)
    this.setTimeGroup = this.setTimeGroup.bind(this)
  }

  componentWillMount() {
    this.setState({
      loading: true
    })
    fetch('https://api.github.com/gists/64d000bdb6233a83802eee0fbb54f8c7')
    .then( res => res.json() )
    .then( res => {
      const data = JSON.parse(res.files['Charteco-Demo-Data'].content)
      this.setState({
        data: {
          day: data.day,
          week: data.week,
          month: data.month,
          quarter: data.quarter
        },
        slices: data.slices,
        tableData: data.table_data,
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

  render() {

    const { loading,
            loaded,
            error,
            data,
            timeGroup,
            slices,
            metricsSelected,
            ratesSelected,
            tableData,
          } = this.state

    const container = document.getElementById('email-report')
    const width = container ? container.offsetWidth : 0

    return (
      <div className="report">
        <TimeGroupingBar
          setTimeGroup={this.setTimeGroup}
          timeGroupSelected={timeGroup}>
          <SlicersAndDicers slices={slices}/>
        </TimeGroupingBar>
        <HeadlineCards
          selectedData={data[timeGroup]}
          />
        <div className="interactive-chart block" id="email-report">
          <EmailReportChart
            selectedData={data[timeGroup]}
            metricsSelected={sortByValues(metrics, metricsSelected)}
            ratesSelected={sortByValues(rates, ratesSelected)}
            width={width * .76}
            />
          <MetricSelection
            selectMetric={this.selectMetric}
            metricsSelected={metricsSelected}
            />
          <RateSelection
            selectRate={this.selectRate}
            ratesSelected={ratesSelected}
            />
        </div>
        <EmailReportTable
          tableData={tableData}
          width={width}
          />
      </div>
    )
  }
}
