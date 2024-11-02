import React, { useState } from "react"

function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="conuter-button" onClick={decrement}>Decrement</button>
        <button className="conuter-button" onClick={reset}>Reset</button>
        <button className="conuter-button" onClick={increment}>Increment</button>

      </div>

    </>
  );

}


export default Counter