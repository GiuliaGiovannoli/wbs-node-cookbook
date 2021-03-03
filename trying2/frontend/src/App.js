import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [picture, setPicture] = useState()
  useEffect(() => {
    fetch("http://localhost:4000/recipes")
    .then(res => res.json())
    .then(data => setPicture(data[2].slug))
  }, [])
  

  return (
    <div>
      hi
      {picture && <img src={`http://localhost:4000/img/${picture}.jpg`} />}
    </div>
  );
}

export default App;
