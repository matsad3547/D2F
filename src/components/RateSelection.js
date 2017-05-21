import React from 'react'
import ValueCheckbox from './ValueCheckbox'
import { rates } from '../utils/'

const RateSelection = ({ selectRate, ratesSelected }) => {

  return (
    <div className="rate-select">
      <h4>Rates</h4>
      { rates.map( (rate, i) => <ValueCheckbox
        selectValue={selectRate}
        key={`rate-${i}`}
        value={rate}
        color={rate.color}
        checked={ratesSelected.includes(rate.value)}/> )}
    </div>
  )
}

export default RateSelection
