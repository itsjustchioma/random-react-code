import React, { useState } from "react";

export default function App() {
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */

  let [count, setCount] = useState(0);
 
  const add = () => {
    setCount(count + 1);
  }

  const subtract = () => {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>–</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>+</button>
    </div>
  );
}
