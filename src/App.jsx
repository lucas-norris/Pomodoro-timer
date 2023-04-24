import { useState, useEffect } from 'react'
import './App.css'
import Timer from './Timer'
import Settings from './Settings'
import SettingsContext from './SettingsContext'

function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)
  const [title, setTitle] = useState('Pomodoro Timer')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

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
          theme,
          setTheme,
        }}
      >
        <h1>{!showSettings ? title : 'Settings'}</h1>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  )
}

export default App
