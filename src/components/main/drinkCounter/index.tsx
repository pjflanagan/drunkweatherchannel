import React from "react";

export const DrinkCounter = ({
  drinkCount,
  setDrinkCount,
}) => {
  return (
    <button onClick={() => setDrinkCount(drinkCount + 1)}>Add Drink</button>
  );
}