import React from 'react'
import {
  metrics,
  rates,
  months,
  calcRateVal,
  quarters,
  dayMillis,
  removeDupes,
 } from '../utils'

const getRandoNum = max => Math.round(Math.random() * (max) + Math.round(Math.random() * 50))

const mockData = max => {
  const num = getRandoNum(max)
  let obj = {
    'emails_sent': num,
    'deliveries': Math.round(num * .9),
    'opens': Math.round(num * .75),
    'clicks': Math.round(num * .5),
    'form_fills': Math.round(num * .4),
    'unsubscribes': Math.round(num * .2),
    'hard_bounces': Math.round(num * .03),
    'soft_bounces': Math.round(num * .07),
  }
  rates.forEach( rate => {
    Object.assign( obj, calcRateVal(obj, rate.value))
  })
  return obj
}

const makeTimeseries = () => {

  const length = 183
  const today = Date.now()
  const startDate = today - (dayMillis * length)
  const max = 100
  const arr = new Array(length).fill(undefined)
  let data = arr.map( a => mockData(max) )
  data.forEach( (d, i) => {
    Object.assign( d, {timestamp: new Date(startDate).setHours(24 * i) })
  })
  return data
}

const createCampaignData = () => {
  const names = ['Who Loves Dogs?', 'Kittens!!!', 'Do you want some cheese?', 'Pizza for dinner!', 'Want to be smarter?']
  let data = names.map( n => mockData(50))
  data.forEach( (d, i) => Object.assign(d, {name: names[i]}))
  return data
}

const rawTimeseries = makeTimeseries()

const findWeekStart = () => {
  const d = rawTimeseries[0].timestamp
  const day = new Date(d).getDay()
  const start = day === 1 ? d : d - (dayMillis * (day - 1))
  return start
}

const createBlankObj = () => {
  let obj = {}
  Object.assign(obj, {period: null})
  metrics.forEach( metric => Object.assign(obj, {[metric.value]: null}))
  rates.forEach( rate => Object.assign(obj, {[rate.value]: null}))
  return obj
}

const day = rawTimeseries.map( obj => {
  let data = {
    period: new Date(obj.timestamp).toLocaleDateString()
  }
  metrics.forEach( metric => {
    Object.assign(data, {[metric.value]: obj[metric.value]})
  })
  rates.forEach( rate => {
    Object.assign( data, {[rate.value]: obj[rate.value]})
  })
  return data
})

const aggregateByWeek = () => {
  let data = []
  data = [...data, createBlankObj()]
  let length = data.length - 1
  data[length].period = `Week of ${new Date(findWeekStart()).toLocaleDateString()}`

  rawTimeseries.forEach( (obj, i) => {
    if (new Date(obj.timestamp).getDay() === 0) {
      length = data.length - 1
      metrics.forEach( metric => {
        data[length][metric.value] += obj[metric.value]
      })
      rates.forEach( rate => {
        Object.assign( data[length], calcRateVal(data[length], rate.value))
      })
      data = [...data, createBlankObj()]
      length = data.length - 1
      data[length].period = `Week of ${new Date(rawTimeseries[i + 1].timestamp).toLocaleDateString()}`
    }
    else {
      length = data.length - 1
      metrics.forEach( metric => {
        data[length][metric.value] += obj[metric.value]
      })
    }
  })
  return data
}

const aggregateByMonth = () => {
  let data = []
  const dataMonths = removeDupes(rawTimeseries.map( obj => new Date(obj.timestamp).getMonth() ) )
  dataMonths.forEach( month => {
    data = [...data, createBlankObj()]
    data[month].period = months[month].abv
    rawTimeseries.forEach( obj => {
      if (new Date(obj.timestamp).getMonth() === month) {
        metrics.forEach( metric => {
          data[month][metric.value] += obj[metric.value]
        })
      }
    })
  })
  data.forEach( obj => {
    rates.forEach( rate => {
      Object.assign( obj, calcRateVal(obj, rate.value))
    })
  })
  return data
}

const aggregateByQuarter = () => {
  let data = []
  data = [...data, createBlankObj(), createBlankObj(), createBlankObj(), createBlankObj(),]
  rawTimeseries.forEach( (obj, i) => {
    if (quarters.q1.value.includes(new Date(obj.timestamp).getMonth())){
      metrics.forEach( metric => {
        data[0][metric.value] += obj[metric.value]
        data[0].period = 'Q1'
      })
    }
    else if (quarters.q2.value.includes(new Date(obj.timestamp).getMonth())){
      metrics.forEach( metric => {
        data[1][metric.value] += obj[metric.value]
        data[1].period = 'Q2'
      })
    }
    else if (quarters.q3.value.includes(new Date(obj.timestamp).getMonth())){
      metrics.forEach( metric => {
        data[2][metric.value] += obj[metric.value]
        data[2].period = 'Q3'
      })

    }
    else if (quarters.q4.value.includes(new Date(obj.timestamp).getMonth())){
      metrics.forEach( metric => {
        data[3][metric.value] += obj[metric.value]
        data[3].period = 'Q4'
      })
    }
  })
  data.forEach( obj => {
    rates.forEach( rate => {
      Object.assign( obj, calcRateVal(obj, rate.value))
    })
  })
  return data
}

const data = {
  // rawTimeseries,
  day,
  week: aggregateByWeek(),
  month: aggregateByMonth(),
  quarter: aggregateByQuarter(),
  slices: {
    accounts: ['Account A', 'Account B', 'Account C'],
    lists: ['List A', 'List B'],
    segments: ['Segment A', 'Segment B'],
    interestCategories: ['Interest A', 'Interest B'],
    locations: ['Utah', 'California', 'Oregon'],
    members: ['Jane Smith', 'Bobby Pin'],
    campaignsOrEmails: ['Newsletter A', 'Promo B'],
  },
  table_data: createCampaignData()
}

const Data = () => (
  <div>
    {JSON.stringify(data, null, '\n')}
  </div>
)

export default Data
