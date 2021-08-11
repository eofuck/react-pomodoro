import { useState } from 'react';
import './App.css';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import Timer from './Timer';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [manual, setManual] = useState(false);

  return (
    <main>
      {/* sets default values for workMinutes and breakMinutes*/}
      {/* same as as workMinutes: workMinutes, breakMinutes: breakMinutes*/}
      {/* it not only passes values but also functionalities. eg. setWork/Breakmintes*/}
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
          manual,
          setManual,
        }}
      >
        {/* if Settings will be clicked it will render settings page otherwise 
        Timer page will be rendered */}
        {/*values didn't get passed into Settings when this code was 
        outside SettingsContext.provider*/}
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
