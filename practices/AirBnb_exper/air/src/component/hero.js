import React from 'react';
import  ReactDOM  from 'react-dom';
import logo from '../images/group.png';
import '../style.css';
 export default function Hero(){  
    return(
        <section className='hero'>
            <img src={logo} alt='hero' className='hero--pic'></img>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by 
                one-of-a-king hosts-all without leaving home
            </p>
        </section>
    )
}
ReactDOM.render(<Hero/>,document.getElementById("root"))