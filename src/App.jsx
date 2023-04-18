import { useState } from 'react'
import './App.css'
import Timer from './Timer'
import Settings from './Settings'

function App() {
  const [showSettings, setShowSettings] = useState(false)

  return <main>{showSettings ? <Settings /> : <Timer />}</main>
}

export default App
