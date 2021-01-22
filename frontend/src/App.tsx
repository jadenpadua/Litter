import React from "react";
import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import cat3 from "./assets/cat_3.png";
import stars from "./assets/stars.png";
import stars2 from "./assets/stars2.png";
const App = () => {
  const [data, setData] = useState(null);

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

      <img src={cat3} style={{ height: 200, width: 200 }} />
      <div className="container1">
        <h1>COMING SOON</h1>
        <h3>ARE YOU READY?</h3>
      </div>


      <div className="container2">
      {/* <img src={stars2} style={{height: 250, width: 350}}/> */}
        <form className="input-form">
          <label>
            <input className="input-text" type="text" name="name" placeholder="YOUR EMAIL" />
          </label>
          <input className="input-button" type="submit" value="NOTIFY ME" />
        </form>
        {/* <img src={stars} style={{height: 350, width: 350}}/> */}
      </div>
  
    </div>




  );
};

export default App;
