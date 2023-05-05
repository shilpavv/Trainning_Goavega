import React from 'react'
function Comp(props) {
  // console.log(props);

  return (
    <option value={props.id}> User {props.id}
    </option>
  )
}

export default Comp
