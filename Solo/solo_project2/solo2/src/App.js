import React from "react";
import Place from './place.js';
import './App.css';
import data from './data.js';
import Header from "./Header.js";


 export default function App() {
  const place = data.map((item)=>{
    return (
    <Place
      item={item}
      />
      );
 
  })
  return (
    
      <div>   
        <Header/>
        <section>{place}</section>
      </div>
  
  )
}







