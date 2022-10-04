import React from 'react'
import './Screens.css'
function Screens({input,result}) {
  return (
    <div className='screen_wrapper'>
     <div className='result'>
        <h1>{result}</h1>
     </div>
     <div className='input'>
       <h3>{input}</h3>
     </div>

    </div>
  )
}

export default Screens