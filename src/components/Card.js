import React from 'react'

const Card = ({title, value, change, positive }) => (
  <div className="card">
    <p className="card-title">{title}</p>
    <div>
      <p className="card-value">{value}</p>
      <p className="card-change" style={ positive ? (change > 0 ? {background: '#033859'} : {background: '#CE2633'}) : (change > 0 ? {background: '#CE2633'} : {background: '#033859'})}>
        { change > 0 ? '+' + change + '%' : change + '%' }</p>
    </div>
  </div>
)

export default Card
