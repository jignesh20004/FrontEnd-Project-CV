import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthproviderContainer from './AuthProvider.jsx/AuthproviderContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthproviderContainer>
      <App />
    </AuthproviderContainer>
  </StrictMode>,
)
