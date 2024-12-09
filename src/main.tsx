import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { LoadingProvider } from './contexts/LoadingContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </StrictMode>,
)
