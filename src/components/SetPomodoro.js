import React from 'react'
import Button from './Button'

const SetPomodoro = () => {
  return (    
      <div className="form-container">
        <form>
          <div className="input-wrapper">
            <div>
              <h3>Work</h3>
              <input type="number" min={0} />
            </div>
            <div>
              <h3>Short Break</h3>
              <input type="number" min={0}/>
            </div>
            <div>
              <h3>Long Break</h3>
              <input type="number" min={0}/>
            </div>
          </div>
        </form>
        <Button title="Set Timer"/>
      </div>
  )
}

export default SetPomodoro