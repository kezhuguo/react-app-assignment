import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

const MyComponent = (props) => {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const addItem = (event) => {
    event.preventDefault();
    setIndex((p) => p + 1);
    setItems([
      ...items,
      {
        id: index,
        name: itemName,
      },
    ]);
    setItemName("");
  };
  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  /*  handleClick() {
    items.concat(itemName);
  }*/

  return (
    <div id="all">
      <h2 id="head" className="title">
        Manage my items
      </h2>
      {/*      <p>The item is: {itemName}</p>
      <p>The items are: {items.length}</p>*/}
      <div id="inputDiv">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button className="input" onClick={addItem}>
          Add item
        </button>

        <inputItem
        //       onClick={() => this.handleClick()}
        />
      </div>

      <div id="itemsDiv">
        <h3 className="title">My items ({items.length})</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
              <CgClose id="close" onClick={() => removeItem(item.id)} />
            </li>
          ))}
        </ul>
      </div>
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
