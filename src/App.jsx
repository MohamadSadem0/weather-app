import React from "react";
import Card from "./Components/card";
import "./App.css";
import RainCouldIcon from "./assets/icons8-rain-cloud-48.png";
const App = () => {
  return (
    <div className="App">
      <Card date="Today" iconLink={RainCouldIcon} temperature={32}></Card>
    </div>
  );
};

export default App;
