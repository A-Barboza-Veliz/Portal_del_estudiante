import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { CursosProvider } from './context/CursosContext'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CursosProvider>
        <App />
      </CursosProvider>
    </StrictMode>
  </BrowserRouter>
)
 
