import React from 'react';
//functional component
// function Greet(){
//     return <h1>helllo shilpa</h1>
// // }


//Arrow Function
const Greet=(props)=> {
    console.log(props);

    return (

       <div>
         <h1>HELLO {props.name} ({props.heroname})</h1>
        {props.children}
       </div>
    )
   
}
export default Greet