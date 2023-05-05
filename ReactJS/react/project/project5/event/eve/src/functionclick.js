import React from 'react'

function functionclick() {
  function clickHandler(){
    console.log('button clicked')
  }
    return (
    <div>
        <h4>Event handler using function Component</h4>
      {/* eventHandler is to be function ----{clickHandler} not function call----- {clickHandler()} */}
      <button onClick={clickHandler}>CLICK</button>
    </div>
  )
}

export default functionclick
