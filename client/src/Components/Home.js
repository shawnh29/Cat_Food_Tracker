import React, { useEffect, useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faSquareXmark} from "@fortawesome/free-solid-svg-icons";

function Home() {
    // const [backendData, setBackendData] = useState([{}]);
    const [gaveBreakfast, setGaveBreakfast] = useState(false);
    const [gaveChuru, setGaveChuru] = useState(false);

    function handleBreakfastClick() {
        setGaveBreakfast(!gaveBreakfast);
    } 
    
    function handleChuruClick() {
        setGaveChuru(!gaveChuru);
    }

    function handleResetClick() {
      setGaveBreakfast(false);
      setGaveChuru(false);
    }

  return (
    <div>
      <div className='main-box'>
        <h1>Shade's Food Tracker</h1>
        <div className='breakfast-box'>
          <h2>
            Breakfast
            {(gaveBreakfast) ? (<FontAwesomeIcon icon={faSquareCheck} id='checkmark'/>) 
              : (<FontAwesomeIcon icon={faSquareXmark} id='checkmark'/>)}
          </h2>
          {(!gaveBreakfast) ? (<button onClick={handleBreakfastClick}>Gave</button>)
          : (null)}
        </div>
        <div className='churu-box'>
          <h2>
              Churu
              {(gaveChuru) ? (<FontAwesomeIcon icon={faSquareCheck} id='checkmark'/>) 
              : (<FontAwesomeIcon icon={faSquareXmark} id='checkmark'/>)}
          </h2>
          {(!gaveChuru) ? (<button onClick={handleChuruClick} id='churu-gave-button'>Gave</button>)
          : (null)}
        </div>
        <button onClick={handleResetClick} id='reset-button'>Reset</button>
      </div>
    </div>
  )
}

export default Home
