import React from "react";
export default function Card(props){
    let badgeText;
    if (props.item.openSpots === 0) {
               badgeText = "SOLD-OUT";
    } else if (props.item.location === "Online") {
                badgeText = "ONLINE";
  }
    return(
        <div className="card">
             {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image" />
            <div>
            <div className="card--stats">    
                <img className="card--star" src="./Star.png" />
                <span >{props.item.stats.rating}</span>
                <span className="col">({props.item.stats.reviewCount})</span>
                <span className="col">{props.item.country}</span>
            </div>
            <p>{props.item.title}</p>
            <p>
            <span className="bold">From ${props.item.price}</span>/person
            </p>
            </div>
        </div>
        
    )
}