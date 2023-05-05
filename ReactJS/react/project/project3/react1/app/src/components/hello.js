import React from "react";

// JSX Version of Hello component
const Hello =()=>{
    return(
        <div className="dummyClass">
            <h1>Helloo All</h1>
        </div>
    )
}

//Without JSX Version(Parameter have atleast 3 property(string(div),pass optional property,children()))
// const Hello=()=>{
//     return React.createElement('div',null,React.createElement('h1',null,'helloooo'))
// }

export default Hello