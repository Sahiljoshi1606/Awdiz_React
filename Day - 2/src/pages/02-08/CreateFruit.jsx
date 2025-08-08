import React, { useState } from "react";

function CreateFruit() {
  const [fruitList, setFruitList] = useState(["apple", "banana", "orange"]);
  const [newFruit, setNewFruit] = useState("");

  const handleInputChange = (e) => {
    setNewFruit(e.target.value);
  };

  const handleAddFruit = () => {
    if (newFruit.trim() !== "") {
      setFruitList([...fruitList, newFruit]);
      setNewFruit(""); // clear input
    }
  };

  return (
    <div>
      <p>Fruit List</p>

      {fruitList.map((fruit, index) => (
        <div key={index}>
          {index + 1}. {fruit}
        </div>
      ))}

      <input
        type="text"
        placeholder="Enter Fruit Name"
        value={newFruit}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleAddFruit}>Add Fruit</button>
    </div>
  );
}

export default CreateFruit;

