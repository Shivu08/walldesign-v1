import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these premium wallpapers!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="The hidden waterfall deep inside the Amazon Jungle"
              label="Rs. 5000"
              path="/products"
            />
            <CardItem
              src="images/img-2.jpg"
              text="The Islands of Bali in a Private Cruise"
              label="Rs. 10000"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="The Atlantic Ocean visiting Uncharted Waters"
              label="Rs. 2000"
              path="/products"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Football on Top of the Himalayan Mountains"
              label="Rs. 2000"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="The Sahara Desert on a guided camel tour"
              label="Rs. 2000"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
