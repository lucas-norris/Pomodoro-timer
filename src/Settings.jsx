import ReactSlider from 'react-slider'
import './slider.css'
import { useContext } from 'react'
import SettingsContext from './SettingsContext'
import BackButton from './BackButton'
import LightButton from './LightButton'
import DarkButton from './DarkButton'

function Settings() {
  const settingsInfo = useContext(SettingsContext)

  const toggleTheme = () => {
    if (settingsInfo.theme === 'dark') {
      settingsInfo.setTheme('light')
    } else {
      settingsInfo.setTheme('dark')
    }
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={(value) => settingsInfo.setWorkMinutes(value)}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={(value) => settingsInfo.setBreakMinutes(value)}
        min={1}
        max={120}
      />
      <div
        style={{
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            marginRight: '20px',
          }}
        >
          <BackButton
            onClick={() => {
              settingsInfo.setShowSettings(false)
            }}
          />
        </div>
        <div
          style={{
            display: 'inline-block',
          }}
        >
          {settingsInfo.theme === 'dark' ? (
            <LightButton onClick={toggleTheme} />
          ) : (
            <DarkButton onClick={toggleTheme} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings
