import {  useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
export default function Auth() {
  const [show, setShow] = useState(false);

  const status = () => {
    setShow(!show);
  };
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center text-white pl-50">
      <div className="">{show ? <Login /> : <Logout />}</div>
      <button onClick={status} className=''> {show ? "Logout" : "Login"}</button>
    </div>
  );
}
