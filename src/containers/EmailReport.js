import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import {
  metrics,
  rates,
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
        data: {},
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
  }

  componentWillMount() {

    fetch('https://api.github.com/gists/64d000bdb6233a83802eee0fbb54f8c7')
    .then( res => res.json() )
    .then( res => {
      this.setState({
        data: JSON.parse(res.files['Charteco-Demo-Data'].content),
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

  render() {
    const container = document.getElementById('email-report')
    const width = container ? container.offsetWidth * .66 : 0

    const { data,
            timeGroup,
            slices,
            metricsSelected,
            ratesSelected
          } = this.state

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
            width={width}
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
          tableData={data.table_data} />
      </div>
    );
  }
}
