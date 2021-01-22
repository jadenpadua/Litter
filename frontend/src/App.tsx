import * as React from "react";
import "./App.css";
import { useEffect} from "react";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import SplashContent from "./components/SplashContent/SplashContent"

const App = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await axios.get("http://127.0.0.1:8000/treets");
        console.log(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  });

  return (
    <div className="App">
      <Navbar />
      <SplashContent />
    </div>
  );
};

export default App;
