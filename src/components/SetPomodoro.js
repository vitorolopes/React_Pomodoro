import React, {useState} from 'react'
import { useSettingsContext } from '../context/SettingsContextProvider'
import Button from './Button'

const SetPomodoro = () => {

  const {dummyValue, updateExecuting} = useSettingsContext()

  console.log(dummyValue)

  const [newTimer, setNewTimer] = useState({
                            work: 10,
                            short: 1,
                            long: 2
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = parseInt(e.target.value)
    setNewTimer({...newTimer, [name]: value}) 
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    updateExecuting(newTimer)
   }

  return (    
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <div>
              <h3>Work</h3>
              <input type="number" min={0}
                     name="work"
                     value={newTimer.work}
                     onChange={handleChange}
              />
            </div>
            <div>
              <h3>Short Break</h3>
              <input type="number" min={0}
                     name="short"
                     value={newTimer.short}
                     onChange={handleChange}
              />
            </div>
            <div>
              <h3>Long Break</h3>
              <input type="number" min={0}
                     name="long"
                     value={newTimer.long}
                     onChange={handleChange}
              />
            </div>
          </div>
          <Button title="Set Timer"/>
        </form>
        
      </div>
  )
}

export default SetPomodoro