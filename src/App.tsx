import { useState } from "react";
import "./App.css";
import Column from "./components/Column";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className= "App">
      <Column state="PLANNED"></Column>
      <Column state="ONGOING"></Column>
      <Column state="DONE"></Column>
    </div >
  );
}

export default App;
