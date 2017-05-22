import React from 'react'

const SliceCheckbox = ({  val,
                          checked,
                          slice,
                          selectSlice,
                         }) => {

                          //  console.log('value:', value);

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
      <label htmlFor={`slice-checkbox-${val}`}>{val}</label>
      <input
        id={`slice-checkbox-${val}`}
        style={ checked ? style.inputChecked : style.input}
        type="checkbox"
        value={val}
        onChange={ () => selectSlice({slice, val,}) }
        checked={checked}
        ></input>
    </div>
  )
}

export default SliceCheckbox
