import { useContext, useState, useEffect, useRef } from 'react'

import ProgressBar from '@ramonak/react-progress-bar'
import PlayButton from './PlayButton'
import PauseButton from './PauseButton'
import SettingsButton from './SettingsButton'
import SettingsContext from './SettingsContext'

// const red = '#f54e4e'
// const green = '#4aec8c'

function Timer() {
  const settingsInfo = useContext(SettingsContext)

  const [isPaused, setIsPaused] = useState(false)
  const [mode, setMode] = useState('work') // ['work', 'break'
  const [secondsCountdown, setSecondsCountdown] = useState(0)

  const secondsCountdownRef = useRef(secondsCountdown)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)

  function initTimer() {
    setSecondsCountdown(settingsInfo.workMinutes * 60)
  }

  useEffect(() => {
    initTimer()

    const interval = setInterval(() => {
      if (!isPausedRef.current) {
        setSecondsCountdown(secondsCountdownRef.current - 1)
      } else if (secondsCountdownRef.current === 0) {
        if (modeRef.current === 'work') {
          setMode('break')
          setSecondsCountdown(settingsInfo.breakMinutes * 60)
        } else {
          setMode('work')
          setSecondsCountdown(settingsInfo.workMinutes * 60)
        }
      }
    }, 1000)
    return clearInterval(interval)
  }, [settingsInfo])

  return (
    <div>
      <ProgressBar completed={60} />
      <div style={{ marginTop: '20px' }}>
        {isPaused ? <PlayButton /> : <PauseButton />}
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  )
}

export default Timer
