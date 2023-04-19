import ReactSlider from 'react-slider'
import './slider.css'
import { useContext } from 'react'
import SettingsContext from './SettingsContext'
import BackButton from './BackButton'

function Settings() {
  const settingsInfo = useContext(SettingsContext)

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
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <BackButton />
      </div>
    </div>
  )
}

export default Settings
