import React from "react";
import { useSelector } from "react-redux";

function Restaurants() {
  const restaurants = useSelector((state) => state.restaurants);

  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.name}>Restaurant name: {restaurant.name}, Location : {restaurant.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
