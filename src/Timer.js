import React from 'react'

import ProgressBar from '@ramonak/react-progress-bar'
import PlayButton from './PlayButton'
import PauseButton from './PauseButton'

// const red = '#f54e4e'
// const green = '#4aec8c'

function Timer() {
  return (
    <div>
      <ProgressBar completed={60} />
      <div style={{ marginTop: '20px' }}>
        <PlayButton />
        <PauseButton />
      </div>
    </div>
  )
}

export default Timer
