import React, { useState } from 'react';
import '../assets/App.css';
export default function Index2() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1 className="heading"> Counter App </h1>
      <div className="card">
        <h3>Count:{count}</h3>
        <div className="countButton">
          <button onClick={increase} disabled={count === 5 ? true : false}>
            +
          </button>
          <button onClick={decrease} disabled={count === -5 ? true : false}>
            -
          </button>
          <button onClick={reset} disabled={count === 0 ? true : false}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}
