import { useState } from "react";

export default function Task() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      tasktitle: input,
    };

    setTask([...task, newTask]);
    setInput("");
  };

  function deletefun(id) {
    setTask(task.filter((item) => item.id !== id));
  }
  return (
    <div className="min-h-screen bg-neutral-700 text-white  p-8">
      <header className="mb-6">
        <h1 className="text-center text-6xl font-bold">Task Vault</h1>
      </header>
      <form className="flex items-center justify-between gap-6 ">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" flex-1 type-text border border-slate-400 p-4 "
          placeholder="Write your task here ........"
        />
        <button
          onClick={addTask}
          className="bg-purple-700 p-3 rounded-2xl hover:cursor-pointer"
        >
          Add task
        </button>
      </form>

      <div>
        {task.map((task) => (
          <div key={task.id} className="mt-5 bg-neutral-800 p-3 mb-2 rounded">
            {task.tasktitle}
            <div className="flex items-center justify-end gap-5 ">
              <button
                onClick={() => deletefun(task.id)}
                className="bg-red-700 p-2 rounded-xl"
              >
                Delete
              </button>
              <button className="bg-blue-700 p-2 rounded-xl">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
