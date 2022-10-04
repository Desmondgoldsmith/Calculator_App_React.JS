import React from 'react'
import './Buttons.css'
function Button({symbol,color,handelClick}) {
  return (
    <div className='button_wrapper' onClick={() => handelClick(symbol)} style={{backgroundColor:color}}>{symbol}</div>
  )
}

export default Button