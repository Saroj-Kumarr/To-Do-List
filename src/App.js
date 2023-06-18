import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [text, setNewText] = useState("");
  let [items, setItems] = useState([]);

  function handleChange(event) {
    const newTextValue = event.target.value;
    setNewText(newTextValue);
  }

  function keyEvent(event) {
    if (event.key == "Enter") {
      setItems((prevItems) => {
        return [...prevItems, text];
      });
      setNewText("");
      event.preventDefault();
    }
    
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
    setNewText("");
  }

  return (
    <div id="test">
      <h3>To-Do List</h3>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Write down here!"
          value={text}
          onKeyPress={keyEvent}
        ></input>
      </form>
      <button id="btn" onClick={addItem}>
        Add
      </button>
      <div id="test2">
        <ul>
          {items.map((todoItems) => (
            <li>{todoItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
