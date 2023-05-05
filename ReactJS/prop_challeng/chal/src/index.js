import React from "react";
import ReactDOM  from "react-dom";
import App from './App';
import Joke from './joke';


function Index() {
  return (
    <div>
      <App/>
      <Joke/>
    </div>
  )
}
ReactDOM.render(<Index/>,document.getElementById("root"))
export default Index
