import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";

function Cards() {
  const [people, setPeople] = useState([
    {
      name: "Kabir Mehra",
      url: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      name: "Manish Sinha",
      url: "https://www.thestatesman.com/wp-content/uploads/2019/07/Poshik-Sharma.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    //setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="bumbleCards">
      <div className="bumble_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div className="card" style={{backgroundImage: `url(${person.url})`}}>
            <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
