import React from 'react'
import { metrics, rates } from '../config/'
import Card from './Card'

const HeadlineCards = ({ selectedData }) => {

  let cards = metrics.filter( metric =>
    metric.value !== 'hard_bounces' &&
    metric.value !== 'soft_bounces' &&
    metric.value !== 'unsubscribes'
   )

  const bounces = {
    label: 'Bounces',
    value: 'bounces',
    positive: false,
  }

  const unsubscribes = metrics.find( metric => metric.value === 'unsubscribes')
  cards = [...cards, bounces, unsubscribes]

  const calBounceRate = (data, l) => {
    return parseFloat(((((data[l].soft_bounces + data[l].hard_bounces) - (data[l - 1].soft_bounces + data[l - 1].hard_bounces))/(data[l - 1].soft_bounces + data[l - 1].hard_bounces)) * 100).toFixed(1))
  }

  const calChangeRate = (data, value, l) => {
    if (data[l][value]) {
      return parseFloat((((data[l][value] - data[l - 1][value])/data[l - 1][value]) * 100).toFixed(1))
    }
    else {
      return parseFloat((((data[l - 1][value] - data[l - 2][value])/data[l - 2][value]) * 100).toFixed(1))
    }
  }

  const getChange = (value, data) => {
    const l = data.length - 1
    if (data[l][value]) {
      return value === 'bounces' ? calBounceRate(data, l) : calChangeRate(data, value, l)
    }
    else {
      return value === 'bounces' ? calBounceRate(data, l - 1) : calChangeRate(data, value, l - 1)
    }
  }

  const calBounces = (data, l) => {
    if (data[l].soft_bounces && data[l].hard_bounces) {
      return data[l].soft_bounces + data[l].hard_bounces
    }
    else {
      return data[l - 1].soft_bounces + data[l - 1].hard_bounces
    }
  }

  if (selectedData) {
    return (
      <div className="headline">
        { cards.map( card => <Card
          key={`${card.value}_card`}
          title={card.label}
          value={ card.value === 'bounces' ? calBounces(selectedData, selectedData.length - 1) :  (selectedData[selectedData.length - 1][card.value] ? selectedData[selectedData.length - 1][card.value] : selectedData[selectedData.length - 2][card.value])}
          change={getChange(card.value, selectedData)}
          positive={card.positive} />
        )}
        { rates.map( rate => <Card
          key={`${rate.value}_rate`}
          title={rate.label}
          value={ selectedData[selectedData.length - 1][rate.value] ? parseFloat(selectedData[selectedData.length - 1][rate.value] * 100).toFixed(1) + '%' :
          parseFloat(selectedData[selectedData.length - 2][rate.value] * 100).toFixed(1) + '%'}
          change={calChangeRate(selectedData, rate.value, selectedData.length - 1) }
          positive={rate.positive} />
        )}
      </div>
    )
  }
  return (
    <div className="headline">Loading...</div>
  )
}

export default HeadlineCards
