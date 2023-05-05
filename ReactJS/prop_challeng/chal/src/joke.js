import React from 'react';
import './style.css'
 export default function Joke(props){
      /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
    const[isShown,setShown]=React.useState(true)
    function toggle(){
      console.log(isShown)
      setShown(prev=>!prev)
    }
    return(
        <div className='container'  >
           {/* {props.setup && <h1 className='props--titile'>Setup:{props.setup}</h1>} */}
           <h1>{props.setup}</h1>
           {isShown && <p>{props.punchline}</p>}
           {/* {isShown && <button onClick={toggle}>hide punchline</button>}
           {!isShown &&<button onClick={toggle}>show punchline</button>} */}
{/*            
           using ternary */}
            <button onClick={toggle}>{isShown ? "hide":"show"} punchline</button> 
    </div>
    )
}
