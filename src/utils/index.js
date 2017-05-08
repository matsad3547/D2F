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
  {
    label: 'Social Report',
    span: 'icon-like',
  },
  {
    label: 'Email Report',
    span: 'icon-envelope',
  },
  {
    label: 'Multi-Channel Report',
    span: 'icon-chart',
  },
  {
    label: 'Campaign Mapper',
    span: 'icon-pencil',
  },
  {
    label: 'Saved Reports',
    span: 'icon-folder-alt',
  },
  {
    label: 'Account Settings',
    span: 'icon-settings',
  },
]

export const metrics = [
  {
    label: 'Opens',
    value: 'opens',
    bar: barColors[0],
    trend: trendColors[0],
  },
  {
    label: 'Deliveries',
    value: 'deliveries',
    bar: barColors[1],
    trend: trendColors[1],
  },
  {
    label: 'Clicks',
    value: 'clicks',
    bar: barColors[2],
    trend: trendColors[2],
  },
  {
    label: 'Unsubscribes',
    value: 'unsubscribes',
    bar: barColors[3],
    trend: trendColors[3],
  },
  {
    label: 'Form Fills',
    value: 'form_fills',
    bar: barColors[4],
    trend: trendColors[4],
  },
  {
    label: 'Hard Bounces',
    value: 'hard_bounces',
    bar: barColors[5],
    trend: trendColors[5],
  },
  {
    label: 'Soft Bounces',
    value: 'soft_bounces',
    bar: barColors[6],
    trend: trendColors[6],
  },
]

export const getMetricsSelected = selectedData =>  Object.keys(selectedData[0]).filter( k => k !== 'timestamp')
