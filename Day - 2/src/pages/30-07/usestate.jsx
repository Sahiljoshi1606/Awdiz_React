import React from "react";
import { useState as UseState } from "react";


const useState = () => {
  const [count, setCount] = UseState(0);
  const [greeting, setGreeting] = UseState("Hello, World!");

  return (
    <div>
        <h1>{greeting}</h1>
        <button onClick={() => setGreeting("Welcome!")}>Change Greeting</button>
      <h1>Count: {count}</h1>
      <button onClick={() => { if (count < 10) setCount(count + 1); }}>Increment</button>
      <button onClick={() => { if (count > 0) setCount(count - 1); }}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      
    </div>
  );
};

export default useState;