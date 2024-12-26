import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    else {
      setCount(0);
    }

    document.getElementById('count').style.color="red";
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  let colourChange = () =>{
    document.body.style.backgroundColor="skyblue";
  }
  return (
    <>
      <h1 id='count'>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={colourChange}>Colour</button>

    </>
  );
  
}
export default Counter;

