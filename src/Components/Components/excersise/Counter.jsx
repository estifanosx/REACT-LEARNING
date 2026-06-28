import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  function increment() {
    setcount(count + 1);
  }
  function decrement() {
    setcount(count - 1);
  }
  function reset() {
    setcount(count == 0);
  }
  return (
    <div className="items-center flex gap-4  text-shadow-white ">
      <button onClick={decrement} className=" bg-amber-800  p-5 text-xl">
        -
      </button>
      <span className="text-3xl p-5  ">{count}</span>
      <button onClick={increment} className="bg-green-800 p-5 text-xl">
        +
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
