import React from 'react';
import  ReactDOM  from 'react-dom';
import App from '../src/App.js';

function Inde(){
    return(
     <div>
        <App/>
     </div>
    )
}
ReactDOM.render(<Inde/>,document.getElementById("root"))