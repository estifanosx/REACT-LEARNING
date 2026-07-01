export default function Count({ count, setCount }) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 border-b">
      <button onClick={() => setCount((prev) => prev + 1)} className="p-10">Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement</button>
      <h1 className="text-4xl">Counter:{count}</h1>
    </div>
  );
}
