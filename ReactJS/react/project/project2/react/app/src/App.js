
import './App.css';
import { useState } from 'react';
//using function create 0-9 numbers
function App() {
  const [calc,setCalc]=useState("");
  const[result,setResult]=useState("");
  const oper=["/","*","-","+",'.'];
  const updateCalc=(value)=>{
    if(
      oper.includes(value) && calc === '' || oper.includes(value) && oper.includes(calc.slice(-1))
    )
    return;
    setCalc(calc+value);
    if(!oper.includes(value) ){
      // eval() represented as a string and returns its completion value
      setResult(eval(calc+value).toString());
    }
  }
  const createdigit = () => {
    const digit = [];  //store array elements
    for (let i = 1; i < 10; i++) {
      digit.push(
        <button onClick={() => updateCalc(i.toString())}key={i}>{i}</button>
      )

    }
    return digit;
  }
  //calculating by clicking on  equal button
  const calculate=()=>{
    setCalc(eval(calc).toString())
  }
//delete
const deleteLast=()=>{
  if(calc==''){
  return;
}
const value=calc.slice(0,-1)
setCalc(value);
}
  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span> : ''} &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          {calc || "0"}
          </div>
          <div className='operator'>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('*')}>*</button>s
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={deleteLast}>DEL</button>
          </div>
        <div className='digit'>
        {createdigit()}
        <button onClick={() => updateCalc('0')}>0</button>
        <button onClick={() => updateCalc('.')}>.</button>
        <button onClick={calculate}>=</button>
        </div>
    </div>
    </div>
  );
}

export default App;
