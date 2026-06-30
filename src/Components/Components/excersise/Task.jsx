import { useState } from "react";

export default function Task() {
 const [task ,useTask] =useState([])
const [input ,useInput] =useState([])
  return (
    <div className="min-h-screen bg-neutral-700 text-white ">
      <header className="mb-20">
        <h1 className="text-center text-6xl font-bold">Task Vault</h1>
      </header>
      <form className="flex items-center justify-between gap-6">
        <input className=" flex-1 type-text border border-slate-400 p-4 " placeholder="Write your task here ........" >
        </input>
        <button  className="bg-purple-700 p-3 rounded-2xl hover:cursor-pointer">
         Add task
        </button>
      </form>
    </div>
  );
}
