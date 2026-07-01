import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CountProvider } from "./Components/Components/excersise/countContext.jsx";

createRoot(document.getElementById("root")).render(
  <CountProvider>
    <App />
  </CountProvider>,
);
