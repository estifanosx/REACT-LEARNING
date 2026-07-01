import { useContext } from "react";
import { CountContext } from "./countContext";

export default function Count() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="flex flex-col items-center justify-center gap-10 border-b">
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>

      <h1 className="text-4xl">Counter: {count}</h1>
    </div>
  );
}
