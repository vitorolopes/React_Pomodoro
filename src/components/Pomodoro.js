import React from 'react'
import Button from './Button'
import CountdownAnimation from './CountdownAnimation'
import {useSettingsContext} from '../context/SettingsContextProvider';

const Pomodoro = () => {

  const {startTimer, pauseTimer} = useSettingsContext();

  return (
    <div >
      
      <ul className='labels'>
        <li><Button title="Work"/></li>
        <li><Button title="Short Break"/></li>
        <li><Button title="Long Break"/></li>
      </ul>

        <Button title="Settings"/>

      <div className="timer-container">
        <div className="time-wrapper">
          <CountdownAnimation/>
        </div>
      </div>

      
      <div className="button-wrapper">
         <Button title="Start"
                 controlTimer={startTimer}
         />
         <Button title="Pause"
                 controlTimer={pauseTimer}
         />  
      </div>
     
    </div>
  )
}

export default Pomodoro