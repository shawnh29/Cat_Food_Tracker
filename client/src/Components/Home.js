import React, { useEffect, useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faSquareXmark} from "@fortawesome/free-solid-svg-icons";

function Home() {
    // const [backendData, setBackendData] = useState([{}]);
    const [gaveBreakfast, setGaveBreakfast] = useState(false);
    const [gaveChuru, setGaveChuru] = useState(false);

    // useEffect(() => {
    //     fetch('/api').then(
    //     response => response.json()
    //     ).then(
    //     data => {
    //         setBackendData(data);
    //     }
    //     )
    // }, []);

    function handleBreakfastClick() {
        setGaveBreakfast(!gaveBreakfast);
    }
    
    function handleChuruClick() {
        setGaveChuru(!gaveChuru);
    }

  return (
    <div>
      <h1>Shade's Food Tracker</h1>
      <div className='breakfast-box'>
        <h2>
          Breakfast
          {(gaveBreakfast) ? (<FontAwesomeIcon icon={faSquareCheck} id='checkmark'/>) 
            : (<FontAwesomeIcon icon={faSquareXmark} id='checkmark'/>)}
        </h2>
        <button onClick={handleBreakfastClick}>Gave</button>
      </div>
      <div className='churu-box'>
        <h2>
            Churu
            {(gaveChuru) ? (<FontAwesomeIcon icon={faSquareCheck} id='checkmark'/>) 
            : (<FontAwesomeIcon icon={faSquareXmark} id='checkmark'/>)}
        </h2>
        <button onClick={handleChuruClick}>Gave</button>
      </div>
    </div>
  )
}

export default Home
