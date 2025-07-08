import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Home from './Home.jsx'
import Index from './pages/home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
