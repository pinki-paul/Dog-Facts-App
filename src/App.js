import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [dogFacts, setDogFacts] = useState(null);

  const fetchDogFacts = () => {
    Axios.get("https://dog-api.kinduff.com/api/facts").then((res) => {
      setDogFacts(res.data);
    });
  }

  useEffect(() => {
    fetchDogFacts();
  }, [])

  return (
    <div className='main-container'>
      <div className='dogs'>
      <h1>Dog Facts App</h1>
      <div className='img'>
      <img src='https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg' alt='dog' />
      </div>
    
      </div>
     
      <div className='container'>
        <button className='btn' onClick={fetchDogFacts}>touch paw</button>
        <p>Facts: <span> {dogFacts?.facts}</span></p>
      </div>
    </div>
  );
}

export default App;
