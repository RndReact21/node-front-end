import React from "react";

const Counter = (props) => {
  const [counter, setCounter] = React.useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
  };
  return (
    <div>
      <p>Current count {counter}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
