import React from 'react'

const Checkbox = ({ metric, selectMetric, checked }) => {

  return (
    <div className="metric-checkbox">
      <ul>
        <li>{metric}</li>
        <li><input
          type="checkbox"
          value={metric}
          onChange={ () => selectMetric(metric) }
          checked={checked}
          ></input></li>
      </ul>
    </div>
  )
}

export default Checkbox
