import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loader from '../src/Components/Loader.jsx'
import { BrowserRouter } from 'react-router-dom'

const RootApp = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, images)
    const timer = setTimeout(() => setLoading(false), 2000) // 2 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <StrictMode>
      <BrowserRouter>
        {loading ? <Loader /> : <App />}
      </BrowserRouter>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<RootApp />)
