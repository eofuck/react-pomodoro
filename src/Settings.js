import ReactSlider from 'react-slider';
import SettingsContext from './SettingsContext';
import './slider.css';
import { useContext, useState } from 'react';
import BackButton from './BackButton';

function Settings() {
  //passes  SettingsContext values into settingsInfo
  const settingsInfo = useContext(SettingsContext);

  return (
    <div style={{ textAlign: 'left' }}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        //updates WorkMinutes when you move slider
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        //updates BreakMinutes when you move slider
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <label style={{ marginTop: '20px' }}>
        Do you want to manually start pomodoros and breaks?
        <input
          type='checkbox'
          checked={settingsInfo.manual}
          onChange={() => settingsInfo.setManual(true)}
        />
      </label>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
