import React, { useState, useEffect } from "react";
import Card from "./Components/card";
import "./App.css";
import RainCloudIcon from "./assets/icons8-rain-cloud-48.png";
import Background from "./assets/pexels-johannes-plenio-1118873 1.png";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.weatherapi.com/v1/forecast.json?key=ab7b00a280f448abba3205026242603&q=beirut&days=3"
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <img src={Background} alt="" />
      <div>Beirut</div>
      <div className="bck-grey">
        <div className="cards">
          <Card
            date="Today"
            iconLink={RainCloudIcon}
            temperature={32}
            condition={weatherData?.current?.condition?.text}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
