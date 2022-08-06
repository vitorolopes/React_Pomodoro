import './App.css';
import Pomodoro from './components/Pomodoro';
import SetPomodoro from './components/SetPomodoro';

function App() {



  return (
    <div className='container'>
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      
      {true ? <SetPomodoro/> : <Pomodoro/> }

    </div> 
  );
}

export default App;
