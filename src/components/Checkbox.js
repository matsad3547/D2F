import React from 'react'

const Checkbox = ({ value, selectValue, checked, color }) => {

  const style = {
    ul: {
      textAlign: 'left'
    },
    input: {
      marginRight: '.5em',
    },
    inputChecked: {
      marginRight: '.5em',
      background: color,
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      height: 14,
      width: 14,
      borderRadius: 5,
    },
  }

  return (
    <div className="value-checkbox">
      <ul style={style.ul}>
        <li><input
          style={ checked ? style.inputChecked : style.input}
          type="checkbox"
          value={value.value}
          onChange={ () => selectValue(value.value) }
          checked={checked}
          ></input></li>
        <li>{value.label}</li>
      </ul>
    </div>
  )
}

export default Checkbox
