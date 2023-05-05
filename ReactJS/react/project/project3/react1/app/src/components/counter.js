// import React,{Component} from 'react';
// class Counter extends Component{
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }
//     increment()
//         {
            //Never modify the state directly it will not change in ui only in console so we want to use set state
            // this.state.count=this.state.count + 1;

            //set state has 2 parameter(state object and call back function)
            // this.setState({
            //     count:this.state.count + 1
            // },()=>{
            //     console.log("callback value",this.state.count)
            // }
            // )
            //synchronous const log statement
//             this.setState(prevstate=>({
//                 count:prevstate.count + 1 

//             }))
//             console.log(this.state.count)
//         }
//         incrementFive(){
//             this.increment()
//             this.increment()
//             this.increment()
//             this.increment()
//             this.increment()
//         }
   
    
//     render(){
//         return(
//             <div>
//                         <div>count{this.state.count}</div>
//                         <button style={{ width: "100px", height: "50px",}}  onClick={()=>this.incrementFive()}>increment</button>
//             </div>
//         )
//     }
// }
// export default Counter
import React, { useState } from "react";
function Para() {
  //const [stateObject, updatedValue]=useState();
// currentData,updatedData=(initialData)
  const state = useState();
  const [cnt, setCount] = useState(5);
  console.log(state);
  const IncNum = () => {
    setCount(cnt + 5);
  };
  return (
    <>    
       <h1>{cnt}</h1>      
       <button onClick={IncNum}>Click me</button>    
       </>  );
}
export default Para;
