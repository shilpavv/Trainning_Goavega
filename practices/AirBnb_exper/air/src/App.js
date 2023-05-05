import React from "react";
import Card from "./component/Card";
import data from "./data";
export default function App() {
  const card = data.map((item) => {
    return (
      < Card
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        key={item.id}
        item={item}
      //or wecan write pass entire object
      //  id= {item.id}
      //  title={item.title}
      //or
      // {...item}

      />
    );
  })
  return (
    <div>
      <section className="cards-list">{card}</section>

    </div>
  )
}



