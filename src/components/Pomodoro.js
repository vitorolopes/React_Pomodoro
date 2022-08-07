import React from 'react'
import Button from './Button'
import CountdownAnimation from './CountdownAnimation'
import {useSettingsContext} from '../context/SettingsContextProvider';

const Pomodoro = () => {

  const {startTimer, pauseTimer, updateExecuting, executing} = useSettingsContext();

 
  const chooseWorkLongShort = (WorkLongShort) => { 
     updateExecuting({
      ...executing,
      currentSubTimer: WorkLongShort
     })
  }

  // TODO 2: Change the background color when a determined subTimer is active

  return (
    <div >
      
      <ul className='labels'>
        <li><Button title="Work" callback={() => chooseWorkLongShort("work")} /></li>
        <li><Button title="Short Break" callback={() => chooseWorkLongShort("short")}/></li>
        <li><Button title="Long Break" callback={() => chooseWorkLongShort("long")}/></li>
      </ul>

        <Button title="Settings"
                callback={() => updateExecuting({})}
        />

      <div className="timer-container">
        <div className="time-wrapper">
          <CountdownAnimation/>
        </div>
      </div>

      
      <div className="button-wrapper">
         <Button title="Start"
                 callback={startTimer}
         />
         <Button title="Pause"
                 callback={pauseTimer}
         />  
      </div>
     
    </div>
  )
}

export default Pomodoro