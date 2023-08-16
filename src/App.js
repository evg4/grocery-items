import React from "react";
import "./App.css";
import GroceryItem from "./GroceryItem";

function App() {
  let total = 0;
  let cost = 0;
  let groceriesArray = [];
  function handleClick(item) {
    total++;
    groceriesArray.push(item);
    alert(`${item} was added to cart! Total number of items: ${total}`);
    document.getElementById("array").innerHTML =
      "Items in basket: " + groceriesArray.join(", ");
  }

  function getCost() {
    cost = 0;
    for (let i = 0; i < groceriesArray.length; i++) {
      switch (groceriesArray[i]) {
        case "Bread":
          cost += 0.5;
          break;
        case "Cheese":
          cost += 2.0;
          break;
        case "Milk":
          cost += 0.8;
          break;
        case "Chocolate":
          cost += 3.5;
          break;
        case "Pepper":
          cost += 0.5;
          break;
        case "Cucumber":
          cost += 0.75;
          break;
        case "Eggs":
          cost += 2.5;
          break;
        case "Ham":
          cost += 2.5;
          break;
        case "Chicken":
          cost += 4.0;
          break;
        default:
          cost += 0;
          break;
      }
    }
    document.getElementById("total-cost").innerHTML = "Total cost: £" + cost;
  }

  return (
    <div>
      <GroceryItem
        name="Bread"
        price="£0.50"
        onClick={() => {
          handleClick("Bread");
        }}
      />
      <GroceryItem
        name="Cheese"
        price="£2.00"
        onClick={() => {
          handleClick("Cheese");
        }}
      />
      <GroceryItem
        name="Milk"
        price="£0.80"
        onClick={() => {
          handleClick("Milk");
        }}
      />
      <GroceryItem
        name="Chocolate"
        price="£3.50"
        onClick={() => {
          handleClick("Chocolate");
        }}
      />
      <GroceryItem
        name="Pepper"
        price="£0.50"
        onClick={() => {
          handleClick("Pepper");
        }}
      />
      <GroceryItem
        name="Cucumber"
        price="£0.75"
        onClick={() => {
          handleClick("Cucumber");
        }}
      />
      <GroceryItem
        name="Eggs"
        price="£2.50"
        onClick={() => {
          handleClick("Eggs");
        }}
      />
      <GroceryItem
        name="Ham"
        price="£2.50"
        onClick={() => {
          handleClick("Ham");
        }}
      />
      <GroceryItem
        name="Chicken"
        price="£4.00"
        onClick={() => {
          handleClick("Chicken");
        }}
      />
      <p id="array"></p>
      <button onClick={getCost}>Calculate cost</button>
      <p id="total-cost"></p>
    </div>
  );
}

export default App;
