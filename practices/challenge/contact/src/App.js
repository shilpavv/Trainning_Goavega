import React from 'react';
import  ReactDOM  from 'react-dom';
import Contact from './component/Contact';

import './style.css';
 export default function App(){
    return(
            <div>
                <Contact 
                img ="./cat1.jpg"
                name="mr whiskerson"
                no="(212)555-1234"
                email="whiskerson@cat.com"
                />
                <Contact 
                 img ="./cat2.jpg"
                name="Fluffykins"
                no="(212)44-765"
                email="Fluffykins@cat.com"
                />
                <Contact 
                img ="./cat3.jpg"
                name=" Felix"
                no="(212)097-674"
                email="Felix@cat.com"
                />
               <Contact 
                img ="./cat4.jpg"
                name="pumpkin"
                no="(212)567-222"
                email="pumpkin@cat.com"
                />

            </div>
    
        
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))
