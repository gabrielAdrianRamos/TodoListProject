import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function Input(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText}></input>
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>
          <AddIcon />
        </span>
      </button>
    </div>
  );
}
