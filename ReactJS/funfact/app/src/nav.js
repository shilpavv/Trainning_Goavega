import React from "react"
import logo from './images/react.png'
import ReactDOM from "react-dom";

export default function Nav(){
    return(
       <div>
        <nav>
        <img src={logo} alt="React logo" width="50px" className="nav--icon"/> 
                <h3>ReactFacts</h3>
                <h4>React courseproject-1</h4>
                <p className="light">Light</p>
                <p className="dark
                ">Dark</p>
        </nav>
       </div>  
    )
}
ReactDOM.render(<Nav/>,document.getElementById("root"))

