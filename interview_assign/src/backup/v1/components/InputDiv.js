import React, { useState } from "react";

const InputDiv = (props) => {
  const [itemName, setItemName] = useState("");

  return (
    <div id="inputDiv">
      <input
        type="text"
        value={itemName}
        onChange={(e) => {
          setItemName(e.target.value);
        }}
      />
      <button
        className="input"
        onClick={() => {
          props.passAdd(itemName);
          setItemName("");
        }}
      >
        Add item
      </button>
    </div>
  );
};

export default InputDiv;
