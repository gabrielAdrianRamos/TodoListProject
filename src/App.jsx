import React, { useState } from "react";
import Input from "./Input";
import Todo from "./Todo";
import EventNoteIcon from "@mui/icons-material/EventNote";

export default function App() {
  const [items, setItems] = useState([]);

  function additems(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItems(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>
          <EventNoteIcon /> Todo List
        </h1>
      </div>
      <Input onAdd={additems} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Todo
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItems}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
