import { useState } from 'react'
import './App.css'
import Timer from './Timer'
import Settings from './Settings'
import SettingsContext from './SettingsContext'

function App() {
  const [showSettings, setShowSettings] = useState(true)

  return (
    <main>
      <SettingsContext.Provider
        value={{
          workMinutes: 25,
          breakMinutes: 15,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}\
      </SettingsContext.Provider>
    </main>
  )
}

export default App
