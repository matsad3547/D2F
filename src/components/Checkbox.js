import React from 'react'

const Checkbox = ({ metric, selectMetric, checked, color }) => {

  const style = {
    ul: {
      textAlign: 'left'
    },
    input: {
      marginRight: '.5em',
    },
    inputChecked: {
      marginRight: '.5em',
      // marginTop: '.4em',
      background: color,
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      height: 14,
      width: 14,
      borderRadius: 5,
    },

  }

  return (
    <div className="metric-checkbox">
      <ul style={style.ul}>
        <li><input
          style={ checked ? style.inputChecked : style.input}

          type="checkbox"
          value={metric.value}
          onChange={ () => selectMetric(metric.value) }
          checked={checked}
          ></input></li>
        <li>{metric.label}</li>
      </ul>
    </div>
  )
}

export default Checkbox
