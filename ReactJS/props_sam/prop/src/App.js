import React from 'react';
import  ReactDOM  from 'react-dom';

 export default function App(){
    // const first="shilpa";
    // const second="sai";
    const date=new Date()
     //(%12)am pm hours
    const hours=date.getHours()%12
    let time
    if ((hours<12)) 
    {
        time="morning"
    }else if(hours>=12 && hours<=17){
        time="afternoon"
    }else{
        time="ni8"
    }
    return(
    //    <h1>hello {first}{second}!!</h1>
    //  <h1>currently date is {hours}o'clock</h1>
    <h1>good{time}</h1>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))