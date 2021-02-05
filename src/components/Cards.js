import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Set Sail in the heart of Ocean visiting Saint Martin "
              label="Adventure"
              path="/details"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the green tunnel at Rangamati"
              label="Luxury"
              path="/details"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Explore the hidden water source inside Sundarban"
              label="Mystery"
              path="/details"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience the beautiful rural areas"
              label="Adventure"
              path="/details"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the sea at Cox's Bazar"
              label="Adrenaline"
              path="/details"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
