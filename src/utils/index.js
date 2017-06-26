export const barColors = [
  '#C41E3D',
  '#fc4f67',
  '#E56399',
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
    label: 'Sends',
    value: 'emails_sent',
    color: barColors[0],
    positive: true,
  },
  {
    label: 'Delivers',
    value: 'deliveries',
    color: barColors[1],
    positive: true,
  },
  {
    label: 'Opens',
    value: 'opens',
    color: barColors[2],
    positive: true,
  },
  // {
  //   label: 'Form Fills',
  //   value: 'form_fills',
  //   color: barColors[4],
  // },
  {
    label: 'Clicks',
    value: 'clicks',
    color: barColors[3],
    positive: true,
  },
  {
    label: 'Hard Bounces',
    value: 'hard_bounces',
    color: barColors[4],
    positive: false,
  },
  {
    label: 'Soft Bounces',
    value: 'soft_bounces',
    color: barColors[5],
    positive: false,
  },
  {
    label: 'Unsubscribes',
    value: 'unsubscribes',
    color: barColors[6],
    positive: false,
  },
]

export const rates = [
  {
    label: 'Delivery Rate',
    value: 'delivery_rate',
    color: trendColors[0],
    params: ['opens', 'deliveries'],
    eq: (opens, deliveries) => opens/deliveries,
    positive: true,
  },
  {
    label: 'Open Rate',
    value: 'open_rate',
    color: trendColors[1],
    params: ['opens', 'emails_sent'],
    eq: (opens, emails_sent) => opens/emails_sent,
    positive: true,
  },
  {
    label: 'CTOR',
    value: 'click_to_open_rate',
    color: trendColors[2],
    params: ['opens', 'clicks'],
    eq: (opens, clicks) => clicks/opens,
    positive: true,
  },
  {
    label: 'CTR',
    value: 'click_through_rate',
    color: trendColors[3],
    params: ['clicks', 'emails_sent', 'hard_bounces', 'soft_bounces'],
    eq: (clicks, emails_sent, hard_bounces, soft_bounces) => clicks/(emails_sent - hard_bounces - soft_bounces),
    positive: true,
  },
  {
    label: 'Bounce Rate',
    value: 'bounce_rate',
    color: trendColors[4],
    params: ['emails_sent', 'hard_bounces', 'soft_bounces'],
    eq: (emails_sent, hard_bounces, soft_bounces) => (hard_bounces + soft_bounces)/emails_sent,
    positive: false,
  },
  {
    label: 'Unsubscribe Rate',
    value: 'unsubscribe_rate',
    color: trendColors[5],
    params: ['unsubscribes', 'emails_sent'],
    eq: (unsubscribes, emails_sent) => unsubscribes/emails_sent,
    positive: false,
  },
]

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

export const months = [
  {
    abv: 'Jan',
    label: 'January',
  },
  {
    abv: 'Feb',
    label: 'February',
  },
  {
    abv: 'Mar',
    label: 'March',
  },
  {
    abv: 'Apr',
    label: 'April',
  },
  {
    abv: 'May',
    label: 'May',
  },
  {
    abv: 'Jun',
    label: 'June',
  },
  {
    abv: 'Jul',
    label: 'July',
  },
  {
    abv: 'Aug',
    label: 'August',
  },
  {
    abv: 'Sep',
    label: 'September',
  },
  {
    abv: 'Oct',
    label: 'October',
  },
  {
    abv: 'Nov',
    label: 'November',
  },
  {
    abv: 'Dec',
    label: 'December',
  },
]

export const days = [
  {
    abv: 'Sun',
    label: 'Sunday',
  },
  {
    abv: 'Mon',
    label: 'Monday',
  },
  {
    abv: 'Tue',
    label: 'Tuesday',
  },
  {
    abv: 'Wed',
    label: 'Wednesday',
  },
  {
    abv: 'Thu',
    label: 'Thursday',
  },
  {
    abv: 'Fri',
    label: 'Friday',
  },
  {
    abv: 'Sat',
    label: 'Saturday',
  },
]

export const sliceParams = {
  accounts: {
    label: 'Accounts',
  },
  lists: {
    label: 'Lists',
  },
  segments: {
    label: 'Segments',
  },
  interestCategories: {
    label: 'Interest Categories'
  },
  locations: {
    label: 'Locations',
  },
  members: {
    label: 'Members',
  },
  campaignsOrEmails: {
    label: 'Campaigns/Emails'
  },
}

export const dynamicStyles = {
  button: {
    clicked: {
      background: '#351c28',
      color: '#fefefe',
    },
    normal: {
      background: '#bebebe',
      color: '#351c28',
    }
  }
}

export const getMetricsSelected = selectedData =>  Object.keys(selectedData[0]).filter( k => k !== 'timestamp')

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
  const aggregatedData = timeInterval.map( (obj, i) => {
    let dataObj = {
      period: obj.abv,
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
