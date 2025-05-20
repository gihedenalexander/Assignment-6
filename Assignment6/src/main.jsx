import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assignment_6.css'
import MovieApplication from './MovieApplication.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieApplication />
  </StrictMode>,
)
