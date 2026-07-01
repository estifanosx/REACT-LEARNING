// import Counter from "./Components/Components/excersise/Counter";
// import Task from "./Components/Components/excersise/Task";
// import Form from "./Components/Components/excersise/Form";
// import Effect from "./Components/Components/excersise/Auth";
// import Auth from "./Components/Components/excersise/Auth";
import Count from "./Components/Components/excersise/Count";
import Countdis from "./Components/Components/excersise/Countdis";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <Counter /> */}
      {/* <Task /> */}
      {/* <Form /> */}
      {/* <Effect /> */}
      {/* <Auth /> */}
      <Count />
      <Countdis />
    </div>
  );
}
