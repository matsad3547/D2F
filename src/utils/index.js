export const barColors = [
  '#C41E3D',
  '#fc4f67',
  '#FF9B54',
  '#FFD166',
  '#F0A202',
  '#F18805',
  '#D84727',
]

export const trendColors = [
  '#03CEA4',
  '#78C3FB',
  '#89A6FB',
  '#7067CF',
  '#345995',
  '#A11692',
  '#861388',
]

export const sections = [
  // {
  //   label: 'Social Report',
  //   span: 'icon-like',
  // },
  {
    label: 'Email Report',
    span: 'icon-envelope',
  },
  // {
  //   label: 'Multi-Channel Report',
  //   span: 'icon-chart',
  // },
  // {
  //   label: 'Campaign Mapper',
  //   span: 'icon-pencil',
  // },
  // {
  //   label: 'Saved Reports',
  //   span: 'icon-folder-alt',
  // },
  {
    label: 'Account Settings',
    span: 'icon-settings',
  },
]

export const metrics = [
  {
    label: 'Opens',
    value: 'opens',
    color: barColors[0],
  },
  {
    label: 'Deliveries',
    value: 'deliveries',
    color: barColors[1],
  },
  // {
  //   label: 'Form Fills',
  //   value: 'form_fills',
  //   color: barColors[4],
  // },
  {
    label: 'Clicks',
    value: 'clicks',
    color: barColors[2],
  },
  {
    label: 'Hard Bounces',
    value: 'hard_bounces',
    color: barColors[3],
  },
  {
    label: 'Soft Bounces',
    value: 'soft_bounces',
    color: barColors[4],
  },
  {
    label: 'Unsubscribes',
    value: 'unsubscribes',
    color: barColors[5],
  },
]

export const rates = [
  {
    label: 'Delivery Rate',
    value: 'delivery_rate',
    color: trendColors[0],
    params: ['opens', 'deliveries'],
    eq: (opens, deliveries) => opens/deliveries,
  },
  {
    label: 'Open Rate',
    value: 'open_rate',
    color: trendColors[1],
    params: ['opens', 'emails_sent'],
    eq: (opens, emails_sent) => opens/emails_sent,
  },
  {
    label: 'CTOR',
    value: 'click_to_open_rate',
    color: trendColors[2],
    params: ['opens', 'clicks'],
    eq: (opens, clicks) => clicks/opens,
  },
  {
    label: 'CTR',
    value: 'click_through_rate',
    color: trendColors[3],
    params: ['clicks', 'emails_sent', 'hard_bounces', 'soft_bounces'],
    eq: (clicks, emails_sent, hard_bounces, soft_bounces) => clicks/(emails_sent - hard_bounces - soft_bounces),
  },
  {
    label: 'Bounce Rate',
    value: 'bounce_rate',
    color: trendColors[4],
    params: ['emails_sent', 'hard_bounces', 'soft_bounces'],
    eq: (emails_sent, hard_bounces, soft_bounces) => (hard_bounces + soft_bounces)/emails_sent
  },
  {
    label: 'Unsubscribe Rate',
    value: 'unsubscribe_rate',
    color: trendColors[5],
    params: ['unsubscribes', 'emails_sent'],
    eq: (unsubscribes, emails_sent) => unsubscribes/emails_sent
  },
]

export const getMetricsSelected = selectedData =>  Object.keys(selectedData[0]).filter( k => k !== 'timestamp')

export const timeGroups = [
  {
    label: 'Day',
    value: 'day',
  },
  {
    label: 'Week',
    value: 'week',
  },
  {
    label: 'Month',
    value: 'month',
  },
  {
    label: 'Quarter',
    value: 'quarter',
  },
  {
    label: 'Year',
    value: 'year',
  },
]

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

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const addToArr = (arr, val) => {
  return [...arr, val]
}

export const removeFromArr = (arr, val) => {
  const index = arr.indexOf(val)
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1),
  ]
}

export const calcRateVal = (data, rate) => {
  const rateObj = rates.find( obj => obj.value === rate)
  const params = rateObj.params.map( param => data[param])
  return {
    [rateObj.value]: Math.round(rateObj.eq(...params) * 1000)/1000,
  }
}

export const getRelevantKeys = (obj, excluded) => {
  return Object.keys(obj)
          .filter( key => key !== excluded )
}

const getPeriod = (time, timestamp) => {
  switch (time) {
    case 'month':
      return new Date(timestamp).getMonth()
    case 'day':
      return new Date(timestamp).getDay()
    default:
  }
}

const getTimeInterval = time => {
  switch (time) {
    case 'day':
      return days
    case 'month':
      return months
    default:
  }
}

export const aggregateByTime = (selectedData, time) => {
  const keys = getRelevantKeys(selectedData[0], 'timestamp')
  const timeInterval = getTimeInterval(time)
  const aggregatedData = timeInterval.map( (element, i) => {
    let dataObj = {
      period: element,
    }
    keys.forEach( key => {
      Object.assign(dataObj, {[key]: []})
    })
    selectedData.forEach( obj => {
      const period = getPeriod(time, obj.timestamp)
      if (period === i) {
        keys.forEach( key => {
          dataObj[key].push(obj[key])
        })
      }
    })
    return dataObj
  })
  .filter( obj => obj[keys[0]].length !== 0 )
  .map( obj => {
    keys.forEach( key => obj[key] = obj[key]
      .reduce( (sum, n) => sum + n )
    )
    return obj
  })
  return aggregatedData
}
