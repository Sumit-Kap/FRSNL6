import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  // console.log("printing value", this);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <React.Fragment>
      <input
        type="text"
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
      />
      <br />
      Name is {name}
      <br />
      Value is {counter}
      <br />
      <button onClick={handleIncrement}>+</button>
      <br />
      <button onClick={handleDecrement}>-</button>
    </React.Fragment>
  );
};

export default Counter;
