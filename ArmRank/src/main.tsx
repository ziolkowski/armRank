import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rank from './Rank.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rank />
  </StrictMode>,
)
