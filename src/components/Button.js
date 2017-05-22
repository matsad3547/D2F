import React from 'react'

const Button = ({ style, value, onClick }) => (
  <input
    style={style}
    type="button"
    onClick={onClick}
    value={value}></input>
)

export default Button
