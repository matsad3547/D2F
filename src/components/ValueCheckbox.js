import React from 'react'

const ValueCheckbox = ({ value, selectValue, checked, color }) => {

  const style = {
    input: {
      marginRight: '.5em',
      background: '#DBDBDB',
    },
    inputChecked: {
      marginRight: '.5em',
      background: color,
    },
  }

  return (
    <div className="value-checkbox">
      <input
        id={`val-checkbox-${value.value}`}
        style={ checked ? style.inputChecked : style.input}
        type="checkbox"
        value={value.value}
        onChange={ () => selectValue(value.value) }
        checked={checked}
        ></input>
      <label htmlFor={`val-checkbox-${value.value}`}>{value.label}</label>
    </div>
  )
}

export default ValueCheckbox
