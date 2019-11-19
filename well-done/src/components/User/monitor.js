import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

const App = () => {
  const [pump, setPump] = useState("");
  const [sensor, setSensor] = useState("");

  const endPoint =
    "https://dashboard.welldone.org/.netlify/functions/get_momo_status?id=";

  useEffect(() => {
    async function getData() {
      const response = await Axios(`${endPoint}4734`);
      console.log(response);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <ul>
        {pid_sensor.map(sensor => (
          <li>{sensor}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
