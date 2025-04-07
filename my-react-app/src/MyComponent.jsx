import React, {useState, useEffect} from "react";

function MyComponent(){
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  function addCount(){
    setCount(c => c + 1);
  }
  function subtractCount(){
    setCount(c => c - 1)
  }
  function changeColor(){
    setColor(c => c === 'green' ? 'red' : 'green')
  }

  return(
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button><br />

    </>
  )
}
export default MyComponent