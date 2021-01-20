import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
const App = () => {

  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await axios.get('http://127.0.0.1:8000/treets')
        console.log(resp.data)
      }
      catch(e) {
        console.log(e)
      }
    }

    fetchData();
  })


  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
