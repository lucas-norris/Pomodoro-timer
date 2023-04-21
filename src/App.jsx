import { useState } from 'react'
import './App.css'
import Timer from './Timer'
import Settings from './Settings'
import SettingsContext from './SettingsContext'

function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)
  const [title, setTitle] = useState('Pomodoro Timer')

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        <h1>{!showSettings ? title : 'Settings'}</h1>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  )
}

export default App
