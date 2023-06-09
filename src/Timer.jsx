import { useContext, useState, useEffect, useRef } from 'react'
import useSound from 'use-sound'

import ProgressBar from '@ramonak/react-progress-bar'
import PlayButton from './PlayButton'
import PauseButton from './PauseButton'
import SettingsButton from './SettingsButton'
import SettingsContext from './SettingsContext'
import ringtone from './assets/ringtone.mp3'
import ResetButton from './ResetButton'

// const red = '#f54e4e'
// const green = '#4aec8c'

function Timer() {
  const settingsInfo = useContext(SettingsContext)

  const [isPaused, setIsPaused] = useState(true)
  const [mode, setMode] = useState('work')
  const [secondsCountdown, setSecondsCountdown] = useState(0)
  const [play] = useSound(ringtone)

  const secondsCountdownRef = useRef(secondsCountdown)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)

  function tick() {
    secondsCountdownRef.current--
    setSecondsCountdown(secondsCountdownRef.current)
  }

  useEffect(() => {
    function switchMode() {
      play()

      const nextMode = modeRef.current === 'work' ? 'break' : 'work'
      const nextSecondsCountdown =
        (nextMode === 'work'
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60

      setMode(nextMode)
      modeRef.current = nextMode

      setSecondsCountdown(nextSecondsCountdown)
      secondsCountdownRef.current = nextSecondsCountdown

      setIsPaused(true)
      isPausedRef.current = true
    }

    secondsCountdownRef.current = settingsInfo.workMinutes * 60
    setSecondsCountdown(secondsCountdownRef.current)

    const interval = setInterval(() => {
      if (isPausedRef.current) return
      if (secondsCountdownRef.current === 0) {
        return switchMode()
      }
      tick()
    }, 1000)
    return () => clearInterval(interval)
  }, [settingsInfo])

  const totalSeconds =
    mode === 'work'
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60

  const percentage = Math.round((secondsCountdown / totalSeconds) * 100)

  const minutes = Math.floor(secondsCountdown / 60)
  let seconds = secondsCountdown % 60
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return (
    <>
      <div>
        <h2>{mode === 'work' ? 'Work' : 'Break'}</h2>
      </div>
      <div>
        <ProgressBar
          completed={percentage}
          customLabel={minutes + ':' + seconds}
          bgColor={mode === 'work' ? 'red' : 'green'}
        />
        <div
          style={{
            marginTop: '20px',
            marginRight: '5px',
            display: 'inline-block',
          }}
        >
          {isPaused ? (
            <PlayButton
              onClick={() => {
                setIsPaused(false)
                isPausedRef.current = false
              }}
            />
          ) : (
            <PauseButton
              onClick={() => {
                setIsPaused(true)
                isPausedRef.current = true
              }}
            />
          )}
        </div>
        <div style={{ display: 'inline-block' }}>
          <ResetButton
            //create onClick function to reset timer based on mode

            onClick={() =>
              mode === 'work'
                ? setSecondsCountdown(settingsInfo.workMinutes * 60)
                : setSecondsCountdown(settingsInfo.breakMinutes * 60)
            }
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
        </div>
      </div>
    </>
  )
}

export default Timer
