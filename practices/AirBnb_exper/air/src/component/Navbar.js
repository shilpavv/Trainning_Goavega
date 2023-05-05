import React from 'react';
import  ReactDOM  from 'react-dom';
import logo from '../images/airbnb.png';
import '../style.css';
 export default function Nav()
{
  return(
    <nav>
       <img  src={logo} alt='air' className='nav--logo'></img>
    </nav>
 
  )
}
ReactDOM.render(<Nav/>,document.getElementById("root"))