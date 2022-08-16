import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, []);

  return (
    <div>
      <h1>Shade's Food Tracker</h1>
      <div className='breakfast-box'>
        <h2>
          Breakfast
          <span>!</span>

        </h2>
        <button>Gave</button>
      </div>
      <div className='churu-box'>
        <h3>Churu</h3>
        <button>Gave</button>
      </div>
    </div>
  )
}

export default App
