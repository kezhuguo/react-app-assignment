import React, { useState } from "react";
import Head from "./components/Head.js";
import InputDiv from "./components/InputDiv.js";
import ItemsDiv from "./components/ItemsDiv.js";

const MyComponent = (props) => {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const addItem = (itemName) => {
    setIndex((p) => p + 1);
    setItems([
      ...items,
      {
        id: index,
        name: itemName,
      },
    ]);
  };
  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div id="all">
      <Head />
      <InputDiv passAdd={addItem} />
      <ItemsDiv items={items} passRemove={removeItem} />
    </div>
  );
};

export default MyComponent;
