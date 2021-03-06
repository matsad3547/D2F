import EmailReport from '../containers/EmailReport'
import CampaignComparison from '../containers/CampaignComparison'
import ListGrowth from '../containers/ListGrowth'
import EmailInsights from '../containers/EmailInsights'

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
export const dayMillis = 86400000

export const sections = [
  {
    label: 'Email Report',
    link: '/',
    span: 'icon-envelope',
  },
  {
    label: 'Social Report',
    link: '/social_report',
    span: 'icon-like',
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
    link: '/account_settings',
    span: 'icon-settings',
  },
]

export const tabs = {
  email: {
    email_report: {
      label: 'Email Report',
      span: 'icon-envelope',
      component: EmailReport,
    },
    campaign_comparison: {
      label: 'Campaign Comparison',
      span: 'icon-envelope',
      component: CampaignComparison,
    },
    list_growth: {
      label: 'List Growth',
      span: 'icon-envelope',
      component: ListGrowth,
    },
    email_insights: {
      label: 'Email Insights',
      span: 'icon-envelope',
      component: EmailInsights,
    },
  }
}

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
    eq: (opens, deliveries) => parseInt(opens, 10)/parseInt(deliveries, 10),
    positive: true,
  },
  {
    label: 'Open Rate',
    value: 'open_rate',
    color: trendColors[1],
    params: ['opens', 'emails_sent'],
    eq: (opens, emails_sent) => parseInt(opens, 10)/parseInt(emails_sent, 10),
    positive: true,
  },
  {
    label: 'CTOR',
    value: 'click_to_open_rate',
    color: trendColors[2],
    params: ['opens', 'clicks'],
    eq: (opens, clicks) => parseInt(clicks, 10)/parseInt(opens, 10),
    positive: true,
  },
  {
    label: 'CTR',
    value: 'click_through_rate',
    color: trendColors[3],
    params: ['clicks', 'emails_sent', 'hard_bounces', 'soft_bounces'],
    eq: (clicks, emails_sent, hard_bounces, soft_bounces) => parseInt(clicks, 10)/(parseInt(emails_sent, 10) - parseInt(hard_bounces, 10) - parseInt(soft_bounces, 10)),
    positive: true,
  },
  {
    label: 'Bounce Rate',
    value: 'bounce_rate',
    color: trendColors[4],
    params: ['emails_sent', 'hard_bounces', 'soft_bounces'],
    eq: (emails_sent, hard_bounces, soft_bounces) => (parseInt(hard_bounces, 10) + parseInt(soft_bounces, 10))/parseInt(emails_sent, 10),
    positive: false,
  },
  {
    label: 'Unsubscribe Rate',
    value: 'unsubscribe_rate',
    color: trendColors[5],
    params: ['unsubscribes', 'emails_sent'],
    eq: (unsubscribes, emails_sent) => parseInt(unsubscribes, 10)/parseInt(emails_sent, 10),
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
  // {
  //   label: 'Year',
  //   value: 'year',
  // },
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

export const quarters = {
  q1: {
    abv: 'Q1',
    value: [0, 1, 2],
  },
  q2: {
    abv: 'Q2',
    value: [3, 4, 5],
  },
  q3: {
    abv: 'Q3',
    value: [6, 7, 8],
  },
  q4: {
    abv: 'Q4',
    value: [9, 10, 11],
  },
}

export const sliceParams = {
  accounts: {
    label: 'Accounts',
  },
  lists: {
    label: 'Lists',
  },
  campaigns: {
    label: 'Campaigns'
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
