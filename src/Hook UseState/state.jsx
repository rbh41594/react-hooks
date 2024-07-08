import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  //passing value hard coded can have consequences in slowing down app since this value is used everytime the component re-renders.
  //useState can also take values from functions where the value is passed only once at the start of the component.
  //in this case every click of the buttons runs useState since component is re-rendered

  //passing value by function
  //   const [count, setCount] = useState(() => {
  //     return 0;
  //   });

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default State;
