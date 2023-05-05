import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import Nav from "./nav";
import Main from "../src/main"

 export default function Page(){
    return(
       <div>
         <Nav/>
        <Main/>
       </div>
        
    )
}
ReactDOM.render(<Page/>,document.getElementById("root"))

