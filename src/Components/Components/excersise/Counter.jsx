import { useState } from "react";

export default function Counter({ title, start }) {
  const [count, setCount ] = useState(start); 
  
  return (
    <div>
      <div>{title}</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
