export default function Login() {
  useEffect(() => {
    console.log("am logged in ");
    return () => {
      console.log("am logged out");
      alert("yes loged out");
    };
  }, []);
  return (
    <div>
      <h1>User Logged in </h1>
      <h1>estifnos logged in</h1>
    </div>
  );
}
