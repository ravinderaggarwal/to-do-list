import React, { useState } from "react";
import List from "./list";
function App() {
  const [contentit, addcont] = useState("");
  const [array, addarray] = useState([]);
  function addcontent(event) {
    const content = event.target.value;
    console.log(content);
    addcont(content);
  }
  function dothis() {
    const middle = contentit;
    addcont("");
    addarray((previos) => {
      return [...previos, middle];
    });
  }
  function delit(index) {
    addarray((prevarray) => {
      return prevarray.filter((element, id) => {
        return id !== index;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={addcontent} value={contentit} />
        <button onClick={dothis}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((contact, index) => {
            return <List name={contact} fun={delit} id={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;