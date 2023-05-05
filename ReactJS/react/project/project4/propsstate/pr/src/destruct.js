import React from 'react';
//extract name & heroname from props object
const Greet=({name,heroname})=> {
    return (
       <div>
         <h1>HELLO {name} ({heroname})</h1>
       </div>
    )

}
export default Greet