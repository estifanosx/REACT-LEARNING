import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <div className="bg-neutral-800 p-8 rounded-xl w-96 space-y-5 ">
        <header className="text-white text-5xl">
          <h2>Sign Up</h2>
        </header>
        <div className="y-5 gap-4">
          <div className="gap-4">
            <input
              type="email"
              placeholder="write your email"
              id="email"
              className="w-full p-3 rounded border border-neutral-600 bg-neutral-700 text-white"
            />
            <label for="email">Email</label>
          </div>

          <div lassName="gap-4">
            {" "}
            <input
              type="password"
              placeholder="........"
              id="password"
              className="w-full p-3 rounded border border-neutral-600 bg-neutral-700 text-white"
            />
            <label for="password">password</label>
          </div>
        </div>
        <button className="text-2xl text-white bg-emerald-500 p-4 rounded-xl ">
          Submit
        </button>
      </div>
    </form>
  );
}
