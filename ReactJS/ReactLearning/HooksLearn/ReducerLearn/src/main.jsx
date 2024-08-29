import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LearnState } from './stateLearn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}  
    <LearnState/>
  </StrictMode>,
)
