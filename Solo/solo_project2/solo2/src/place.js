
import React from 'react'
import './index.css';
export default function Place(props) {
  return (
    <div id="container">
      <div class="product-details">
        <div className="loc--details">
          <img className="loc--img" src="loc.png" />
          <h1 className="country--title">{props.item.location}</h1>
          <a className="see-loc" href={props.item.googleMapsUrl}> See Location</a>
        </div>
        <h4 className="title">{props.item.title}</h4>
        <div className="dates">
          <span className="start--date">{props.item.startDate}-</span>
          <span className="end--date">{props.item.endDate}</span>
        </div>
        <p class="information">{props.item.description}</p>
      </div>
      <div class="product-image">
        <img className="main--img" src={props.item.imageUrl} alt="" />
      </div>
    </div>
  );
}

<img className="nav--logo" src="./loc.png" width="20px" height="20px" /> 