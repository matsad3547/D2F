export const metrics = [
  {
    label: 'Opens',
    value: 'opens',
  },
  {
    label: 'Deliveries',
    value: 'deliveries',
  },
  {
    label: 'Clicks',
    value: 'clicks',
  },
  {
    label: 'Unsubscribes',
    value: 'unsubscribes',
  },
  {
    label: 'Form Fills',
    value: 'form_fills',
  },
  {
    label: 'Hard Bounces',
    value: 'hard_bounces',
  },
  {
    label: 'Soft Bounces',
    value: 'soft_bounces',
  },
]

export const getMetricsSelected = selectedData =>  Object.keys(selectedData[0]).filter( k => k !== 'timestamp')
