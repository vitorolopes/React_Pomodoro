import React, {useState} from 'react'
import Button from './Button'
import CountdownAnimation from './CountdownAnimation'
import {useSettingsContext} from '../context/SettingsContextProvider';

const Pomodoro = () => {

  const {startTimer, pauseTimer, updateExecuting, executing} = useSettingsContext();

  const [key, setKey] = useState(0)
 
  const chooseWorkLongShort = (WorkLongShort) => { 
     updateExecuting({
      ...executing,
      currentSubTimer: WorkLongShort
     })

     setKey(prevKey => prevKey + 1)
  }



  return (
    <div >
      
      <ul className='labels'>
        <li>
          <Button title="Work" callback={() => chooseWorkLongShort("work")} 
                  activeClass = {executing.currentSubTimer === "work" ? "active-label" : " "}
          />
        </li>
        <li>
          <Button title="Short Break" callback={() => chooseWorkLongShort("short")}
                  activeClass = {executing.currentSubTimer === "short" ? "active-label" : " "}
          />
        </li>
        <li>
          <Button title="Long Break" callback={() => chooseWorkLongShort("long")}
                  activeClass = {executing.currentSubTimer === "long" ? "active-label" : " "}
          />
          </li>
      </ul>

        <Button title="Settings"
                callback={() => updateExecuting({})}
        />

      <div className="timer-container">
        <div className="time-wrapper">
          <CountdownAnimation
            key={key}

          />
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