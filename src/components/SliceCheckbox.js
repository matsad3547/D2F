import React from 'react'

const SliceCheckbox = ({  value,
                          checked,
                          slice,
                          selectSlice,
                         }) => {

                           console.log('value:', value);

  const style = {
    input: {
      marginRight: '.5em',
      background: '#DBDBDB',
    },
    inputChecked: {
      marginRight: '.5em',
      background: '#6a273a',
    },
  }

  return (
    <div className="value-checkbox">
      <label htmlFor={`slice-checkbox-${value}`}>{value}</label>
      <input
        id={`slice-checkbox-${value}`}
        style={ checked ? style.inputChecked : style.input}
        type="checkbox"
        value={value}
        onChange={ () => selectSlice({slice, val: value}) }
        checked={checked}
        ></input>
    </div>
  )
}

export default SliceCheckbox
