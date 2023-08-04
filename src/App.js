import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import Main from "./components/Main";
import { UserData } from "./Data";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
