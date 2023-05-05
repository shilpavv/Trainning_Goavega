import React from 'react';
import  ReactDOM  from 'react-dom';
import Hero from './component/hero';
import Nav from './component/Navbar';
import App from './App';
function Inde()
{
  return(
    <div>
    <Nav/>
    <Hero/>  
    <App/>
    </div>
   
  )
}
ReactDOM.render(<Inde/>,document.getElementById("root"))