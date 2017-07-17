import React from 'react'

const Card = ({title, value, change, positive }) => (
  <div className="card">
    <p className="card-title">{title}</p>
    <div>
      <p className="card-value">{value}</p>
      <div className="card-change">
        {positive ? (change > 0 ? <i className="fa fa-caret-up" aria-hidden="true" style={{color: '#5DDE9A'}}></i> : <i className="fa fa-caret-down" aria-hidden="true" style={{color: '#C92C33'}}></i>) : (change > 0 ? <i className="fa fa-caret-up" aria-hidden="true" style={{color: '#C92C33'}}></i> : <i className="fa fa-caret-down" aria-hidden="true" style={{color: '#5DDE9A'}}></i>)}
        <p>{ change > 0 ? '+' + change + '%' : change + '%' }</p>
      </div>
    </div>
  </div>
)

export default Card

// <p className="card-change" style={ positive ? (change > 0 ? {background: '#033859'} : {background: '#CE2633'}) : (change > 0 ? {background: '#CE2633'} : {background: '#033859'})}>
//   { change > 0 ? '+' + change + '%' : change + '%' }</p>
