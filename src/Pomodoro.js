import React from 'react';
import { useRef } from "react";
import { useTimer } from 'use-timer';
//import MyImage from './pom.png';
//import NotificationSound from "./notification-sound.mp3";

const Pomodoro = () => {
 
  const audioPlayer = useRef(null);

  function playAudio() {
    audioPlayer.current.play();
  }

  const { time, start, pause, reset, status } = useTimer({
    
    initialTime: 5,
    endTime: 0,
    timerType: 'DECREMENTAL',
    onTimeOver: () => {
    },
  });
  return (
    <>
    
      <div className='pomodoro'>

      <h1 className='home'>Pomodoro</h1>
      
      <ul>
          <li>
            <p className='homeText'>
            ⚪ Click start to begin the 25 Minute Timer!
            </p>
          </li>
        </ul>
        <button className="timerButton" onClick={start}>Start</button>
        <button className="timerButton" onClick={pause}>Pause</button>
        <button className="timerButton" onClick={reset}>Reset</button>

        {/*<audio ref={audioPlayer} src={NotificationSound} />

        
       <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
       <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
       <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
       <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
        <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
       <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
       <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
       <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
        <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
       <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
       <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img>
       <img className='photo' alt="tomato photo resembling pomodoro" src={MyImage}></img> */}
        <p className='pomText'>Elapsed time: {time} seconds</p>
        {status === 'RUNNING' && <p>Running...</p>}
        
      </div>
      </>
    );
  }
   
  export default Pomodoro;