import { sortByValues, metrics } from '../index'

describe( 'sortByValues()', () => {
  test(' should return a sorted version of an array according to its first argument', () => {
    const selectedMetrics = ['opens', 'emails_sent', 'soft_bounces']
    const actual = sortByValues(metrics, selectedMetrics)
    const expected = ['emails_sent', 'opens', 'soft_bounces']
    expect(actual).toEqual(expected)
  })

  test(' should return a sorted version of an array according to its first argument', () => {
    const selectedMetrics = ['clicks', 'hard_bounces', 'deliveries', 'soft_bounces', 'unsubscribes', 'emails_sent' ]
    const actual = sortByValues(metrics, selectedMetrics)
    const expected = ['emails_sent', 'deliveries', 'clicks', 'hard_bounces', 'soft_bounces', 'unsubscribes']
    expect(actual).toEqual(expected)
  })
})
