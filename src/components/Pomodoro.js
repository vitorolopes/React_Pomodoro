import React from 'react'
import Button from './Button'

const Pomodoro = () => {
  return (
    <div >
      
      <ul className='labels'>
        <li><Button title="Work"/></li>
        <li><Button title="Short Break"/></li>
        <li><Button title="Long Break"/></li>
      </ul>

        <Button title="Settings"/>

      <div className="timer-container">
        CLOCK
      </div>

      
      <div className="button-wrapper">
         <Button title="Start"/>
         <Button title="Pause"/>  
      </div>
     
    </div>
  )
}

export default Pomodoro