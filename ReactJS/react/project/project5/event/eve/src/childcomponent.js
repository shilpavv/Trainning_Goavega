import React from 'react'

function childcomponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Parent</button>
    </div>
  )
}

export default childcomponent
