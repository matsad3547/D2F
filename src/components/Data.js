import React from 'react'
import { metrics, rates, months, aggregateByTime, calcRateVal, quarters, dayMillis } from '../utils'

const makeData = () => {

  const length = 183
  const today = Date.now()
  const startDate = today - (dayMillis * length)
  const max = 100
  const arr = new Array(length).fill(undefined)
  const getRandoNum = () => Math.round(Math.random() * (max) + Math.round(Math.random() * 50))

  let data = arr.map( (d, i) => {
    const num = getRandoNum()
    const obj = {
      'timestamp': new Date(startDate).setHours(24 * i),
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
  })
  return data
}

const rawTimeseries = makeData()

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

const aggregateByWeek = () => {
  let data = []
  data = [...data, createBlankObj()]
  let length = data.length - 1
  data[length].period = `Week of ${new Date(findWeekStart().start).toLocaleDateString()}`

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
        // data[length][metric.value] = data[length][metric.value] + obj[metric.value]
      })
    }
  })
  return data
}

const aggregateByMonth = () => {
  let data = []
  const dataMonths = rawTimeseries.map( obj => new Date(obj.timestamp).getMonth() )
  console.log('data months:', dataMonths);
  // const dataMonths = months.filter( (m, i) => )

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

console.log('aggegate by Quarter:', aggregateByQuarter());

const data = {
  // rawTimeseries,
  day,
  week: aggregateByWeek(),
  month: aggregateByMonth(),
  // month: aggregateByTime(rawTimeseries, 'month'), //starts with first month that starts at 1
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
}

const Data = () => (
  <div>
    {JSON.stringify(data, null, "")}
  </div>
)

export default Data


//
// const Timeseries = () => {
//   return (
//     <div>
//       `		{
// 			"timestamp": "2017-03-20T00:00:00+00:00",
// 			"emails_sent": 1,
// 			"unique_opens": 0,
// 			"recipients_clicks": 0
// 		},`
//     </div>
//   )
// }
