import React from 'react';
import ReactDOM from "react-dom";
import './style.css'
import logo from './images/profile.png'
 export default function Info(){
    return(
        <main>
            <img src={logo} alt='' width="50px" className='center'></img>
            <h1>Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <h5>laurasmith.website</h5>
            <button >Email</button>
            <button >LinkedIn</button>
        </main>
    )
}
ReactDOM.render(<Info/>,document.getElementById("root"))