import { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
export default function Auth() {
  const [show, setShow] = useState(false);
  const status = () => {
    setShow(!show);
  };
  return (
    <div>
      <div>{show ? <Login /> : <Logout />}</div>
      <button onClick={status}> {show ? "Logout" : "Login"}</button>
    </div>
  );
}
