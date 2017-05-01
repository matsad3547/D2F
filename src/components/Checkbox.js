import React from 'react'

const Checkbox = ({ metric, selectMetric, checked }) => {

  const style = {
    ul: {
      textAlign: 'left'
    },
    input: {
      marginRight: '.5em',
      // input[type='checkbox']::checked{
      //   background: 'red',
      // },
      // backgroundColor: 'red',
    }
  }

  return (
    <div className="metric-checkbox">
      <ul style={style.ul}>
        <li><input
          style={style.input}
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
