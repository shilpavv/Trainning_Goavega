import React from "react";
import  ReactDOM from "react-dom";
  export default function About(){
    return(
        <nav>
             <h4>About</h4>
             <p>Mount Fuji the tallest mountain in japan,standing at 36675 meter .Mount fuji is the single popular tourist site in japan,for both japaneese and foreign toursist.</p>
        </nav>
    )
}
ReactDOM.render(<About/>,document.getElementById("root"))