import React from "react";

function GroceryItem(props) {
  return (
    <button onClick={props.onClick}>
      {props.name} <br /> {props.price}
    </button>
  );
}

export default GroceryItem;
