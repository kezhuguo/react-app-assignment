import React from "react";
import { CgClose } from "react-icons/cg";

const ItemsDiv = (props) => {
  const items = props.items;

  return (
    <div id="itemsDiv">
      <h3 className="title">My items ({items.length})</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <CgClose id="close" onClick={() => props.passRemove(item.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsDiv;
