import React from 'react';
 export default function Joke(props){
    return(
        <div className='container'  >
           {/* {props.setup && <h1 className='props--titile'>Setup:{props.setup}</h1>} */}
           <h1>{props.setup}</h1>
             <p>{props.punchline}</p>
    </div>
    )
}
