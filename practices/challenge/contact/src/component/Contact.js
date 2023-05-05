import React from 'react';
import  ReactDOM  from 'react-dom';
 export default function Contact(props){
    return(
     <div className='contact-card'>
        <div className='column'>
            <img src={props.img} alt="image" width="400px" height="250px"/>
            <h1>{props.name}</h1>
            <div>
                <img src=''alt></img>
                <p className='cat--no'>{props.no}</p>
            </div>
            <div>
                <img src='' alt=''></img>
                <p className='cat-email'>{props.email}</p>
            </div>
            </div>
     </div>
    )
}
ReactDOM.render(<Contact/>,document.getElementById("root"))