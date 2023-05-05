import React from "react"

export default function Star(props) {
    let starIcon = props.isFilled ? "star1.png" : "star2.png"
    return(
   <img 
         src={`../${starIcon}`} width="50px"
         className="card--favorite"
         onClick={props.handleClick}
         /> 
    )                  
}