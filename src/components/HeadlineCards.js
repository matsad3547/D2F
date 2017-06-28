import React from 'react'
import {
  metrics,
  rates,
  } from '../utils/'
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

  if (selectedData) {
    return (
      <div className="headline">
        { cards.map( card => <Card
          key={`${card.value}_card`}
          title={card.label}
          value={ card.value === 'bounces' ? selectedData[selectedData.length - 1].soft_bounces + selectedData[selectedData.length - 1].hard_bounces : selectedData[selectedData.length - 1][card.value]}
          change={card.value === 'bounces' ? parseFloat(((((selectedData[selectedData.length - 1].soft_bounces + selectedData[selectedData.length - 1].hard_bounces) - (selectedData[selectedData.length - 2].soft_bounces + selectedData[selectedData.length - 2].hard_bounces))/(selectedData[selectedData.length - 2].soft_bounces + selectedData[selectedData.length - 2].hard_bounces)) * 100).toFixed(1)) :parseFloat((((selectedData[selectedData.length - 1][card.value] - selectedData[selectedData.length - 2][card.value])/selectedData[selectedData.length - 2][card.value]) * 100).toFixed(1)) }
          positive={card.positive} />
        )}
        { rates.map( rate => <Card
          key={`${rate.value}_rate`}
          title={rate.label}
          value={ parseFloat(selectedData[selectedData.length - 1][rate.value] * 100).toFixed(1) + '%'}
          change={parseFloat((((selectedData[selectedData.length - 1][rate.value] - selectedData[selectedData.length - 2][rate.value])/selectedData[selectedData.length - 2][rate.value]) * 100).toFixed(1)) }
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
