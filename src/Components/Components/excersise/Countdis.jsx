import { useContext } from "react";
import { CountContext } from "./countContext";

export default function Countdis() {
  const { count } = useContext(CountContext);

  return (
    <div>
      <h2 className="text-2xl">Display: {count}</h2>
    </div>
  );
}
