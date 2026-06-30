import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 10)}>+</button>
    </div>
  );
}
