import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './styles/global.css'

const link1 = document.createElement('link')
link1.rel = 'preconnect'
link1.href = 'https://fonts.googleapis.com'
document.head.appendChild(link1)

const link2 = document.createElement('link')
link2.rel = 'preconnect'
link2.href = 'https://fonts.gstatic.com'
link2.crossOrigin = 'anonymous'
document.head.appendChild(link2)

const link3 = document.createElement('link')
link3.rel = 'stylesheet'
link3.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap'
document.head.appendChild(link3)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)