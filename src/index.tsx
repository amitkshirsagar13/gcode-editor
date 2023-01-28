import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import GCode from './components/editors/gcode/gcode'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GCode></GCode>
  </React.StrictMode>,
)
