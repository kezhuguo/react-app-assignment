import React, { useState } from "react";
import Head from "./components/Head.js";
import InputDiv from "./components/InputDiv.js";
import ItemsDiv from "./components/ItemsDiv.js";

const MyComponent = (props) => {
  //  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  /*  const getItem = (data) => {
    setItemName(data)
  }*/
  const addItem = (itemName) => {
    setIndex((p) => p + 1);
    setItems([
      ...items,
      {
        id: index,
        name: itemName,
      },
    ]);
    //    setItemName('');
  };
  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div id="all">
      <Head />
      {/*      <p>The item is: {itemName}</p>
      <p>The items are: {items.length}</p>*/}

      <InputDiv /*passItem={getItem}*/ passAdd={addItem} />

      <ItemsDiv items={items} passRemove={removeItem} />
    </div>
  );
};

const headerTxt = () => {};
const inputItem = (props) => {
  return (
    <button className="input" onClick={props.onClick}>
      Add item
    </button>
  );
};
const itemList = () => {};

export default MyComponent;
