import React from 'react'
import {
  metrics,
  rates,
  } from '../utils/'

const HeadlineCards = ({ selectedData }) => {
  // const cards = [...metrics, ...rates].map( obj => {
  //   return {
  //     label: obj.label,
  //     value: obj.value,
  //   }
  // })
  console.log('data from Headline cards:', selectedData);
  if (selectedData) {
    return (
      <div className="headline">
        { metrics.map( metric => <Card
          key={`${metric.value}_card`}
          title={metric.label}
          value={selectedData[selectedData.length - 1][metric.value]}
          change={selectedData[selectedData.length - 1][metric.value] - selectedData[selectedData.length - 2][metric.value]}
          positive={metric.positives} />
        )}
      </div>
    )
  }
  return (
    <div className="headline">Loading...</div>
  )
}

// headline goes here
// {selectedData[selectedData.length-1][metrics[0].value]}



export default HeadlineCards

const Card = ({title, value, change, positive }) => (
  <div className="card">
    <h3>{title}</h3>
    <div className="card-sinline">
      <h2>{value}</h2>
      <p style={ positive ? {background: '#033859'} : {background: '#CE2633'}}>
        { change > 0 ? '+' + change : change }</p>
    </div>
  </div>
)
