import React from 'react'
import Checkbox from './Checkbox'
import { rates } from '../utils/'

const RateSelection = ({ selectRate, ratesSelected }) => {

  return (
    <div className="rate-select">
      <h4>Rates</h4>
      { rates.map( (rate, i) => <Checkbox
        selectValue={selectRate}
        key={`rate-${i}`}
        value={rate}
        color={rate.trend}
        checked={ratesSelected.includes(rate.value)}/> )}
    </div>
  )
}

export default RateSelection
