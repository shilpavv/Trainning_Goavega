import React from "react";
import  ReactDOM from "react-dom";
import Info from "./Info";
import About from './About';
import Interest from "./Interst";
import Footer from "./Footer";
function Index(){
  return(
    <div>
      <Info/>
    <About/>
   <Interest/>
   <Footer/>
    </div>
    
  )
}
ReactDOM.render(<Index/>,document.getElementById("root"))