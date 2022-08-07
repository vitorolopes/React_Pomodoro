import './App.css';
import Pomodoro from './components/Pomodoro';
import SetPomodoro from './components/SetPomodoro';

import {useSettingsContext} from './context/SettingsContextProvider';

function App() {

  const {executing} = useSettingsContext()

  return (
    <div className='container'>
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      
      {executing.work ? <Pomodoro/> : <SetPomodoro/> }

    </div> 
  );
}

export default App;
