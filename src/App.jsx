import { useState } from "react";
import Count from "./Components/Components/excersise/Count";
import Countdis from "./Components/Components/excersise/Countdis";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
      <Countdis count={count} />
    </div>
  );
}
