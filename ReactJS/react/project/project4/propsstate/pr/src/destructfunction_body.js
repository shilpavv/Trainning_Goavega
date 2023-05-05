import React from "react";
const Greet=(props)=> {
    const {name,heroname}=props
    return (
       <div>
         <h1>HELLO {name} ({heroname})</h1>
       </div>
    )
}
export default Greet