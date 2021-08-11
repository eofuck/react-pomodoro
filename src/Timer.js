import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work'); //work/break/pause
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft); //sets default value
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const manualRef = useRef(settingsInfo.manual);

  //switches study mode
  function switchMode() {
    //try with (!mode)
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds =
      (nextMode === 'work'
        ? settingsInfo.workMinutes
        : settingsInfo.breakMinutes) * 60;
    /*
    nextMode === 'work'
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60
    );
    */
    setMode(nextMode);
    modeRef.current = nextMode;

    //replace code in setSecondsLeft with nextSeconds
    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  function tick() {
    secondsLeftRef.current--; //-=1
    //secondsLeft - 1;
    setSecondsLeft(secondsLeftRef.current);
  }

  function initTimer() {
    //equation equals to all of the seconds
    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);
  }

  //makes initTimer run everytime settingsInfo ins changed
  useEffect(() => {
    initTimer();

    //when this component mounts this runs
    const interval = setInterval(() => {
      //if paused do nothing
      if (isPausedRef.current) {
        //isPaused
        console.log(1);
        return;
      }
      //if time runs out switches modes
      //without Ref even if state would change
      //it still wouldn't refreshed inside here
      if (secondsLeftRef.current === 0) {
        //if user chose that he wants to manulay click
        //and start next mode (manual==true), timer won't
        //do anything when time runs out, it just pauses
        if (manualRef.current) {
          setIsPaused(true);
          isPausedRef.current = true;
        }
        return switchMode();
      }

      //if not paused or time didn't run out
      tick();
      //lower this number for speeding timer up
    }, 100); //milliseconds

    //when it onmounts this runs
    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === 'work'
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60); //21.7 > 21
  let seconds = secondsLeft % 60;
  if (seconds < 10) {
    seconds = '0' + seconds; //:07
  }
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ':' + seconds}
        styles={buildStyles({
          //rotation,
          //strokeLinecap,
          textColor: '#fff',
          pathColor: mode === 'work' ? red : green,
          trailColor: 'rgba(255,255,255,.2)',
        })}
      />
      <div>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <div>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
